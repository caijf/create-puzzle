import { AsyncMemo, loadImageWithBlob } from 'util-helpers';
import { getRandomPoints, drawPuzzle, Point, canvasToImage } from './util';
import { isObject, randomInt, uniqueId } from 'ut2';

const asyncMemo = new AsyncMemo<{
  image: HTMLImageElement;
  blob: Blob;
}>({ max: 5, maxStrategy: 'replaced' });
asyncMemo.cache.on('del', (k, v) => {
  try {
    if (v.image.src) {
      URL.revokeObjectURL(v.image.src);
    }
  } catch (err) {
    /* empty */
  }
});
function clearCache(key?: string | string[]) {
  if (key) {
    asyncMemo.cache.del(key);
  } else {
    asyncMemo.cache.clear();
  }
}

const wm = new WeakMap();
const getCacheKey = (obj: string | Blob) => {
  if (!isObject(obj)) {
    return String(obj);
  }
  if (!wm.get(obj)) {
    wm.set(obj, uniqueId('cp'));
  }
  return wm.get(obj) as string;
};

const MimeType = {
  jpeg: 'image/jpeg',
  png: 'image/png',
};

// 缓存之前的 blob url
const previousBlobUrlCache: string[] = [];

function revokeBlobUrls(blobUrls: string[]) {
  blobUrls.forEach((item) => {
    URL.revokeObjectURL(item);
  });
}

type Options = {
  // 拼图
  borderWidth?: number; // 描边宽度。默认 2
  borderColor?: string; // 描边颜色。默认 rgba(255,255,255,0.7)
  fillColor?: string; // 填充颜色。默认 rgba(255,255,255,0.7)
  points?: NonNullable<Parameters<typeof drawPuzzle>[1]>['points']; // 拼图点，不传默认随机2/3/4
  width?: number; // 宽度。默认 60
  height?: number; // 高度。默认 60
  x?: number; // x 轴偏移值，如果不传内部随机生成。
  y?: number; // y 轴偏移值，如果不传内部随机生成。
  margin?: number; // 上下左右留白。默认 2
  equalHeight?: boolean; // 等高。默认 true

  // 背景图
  bgWidth?: number; // 背景图宽度。默认 图片宽度
  bgHeight?: number; // 背景图高度。默认 图片高度
  bgOffset?: [number, number] | ((imgWidth: number, imgHeight: number) => [number, number]); // 背景图偏移值。 默认 [0,0]

  // 上传的图片
  imageWidth?: number; // 自定义输入图片宽度。
  imageHeight?: number; // 自定义输入图片高度。
  cacheImage?: boolean; // 缓存最近加载成功的图片，最大缓存数量为 5 ，可使用 clearCache 清理缓存。默认为 true 。
  ajaxOptions?: Parameters<typeof loadImageWithBlob>[1]; // ajax 请求配置项，当传入的图片为字符串时才会触发请求。可查阅： https://doly-dev.github.io/util-helpers/global.html#AjaxOptions

  // 导出配置
  bgImageType?: string; // 背景图导出类型。默认 image/jpeg
  quality?: number; // 导出图片质量。默认 0.8 。
  format?: 'dataURL' | 'blob'; // 导出图片格式。默认 dataURL 。
  autoRevokePreviousBlobUrl?: boolean; // 自动释放之前导出的 blob url ，仅在 format='blob' 时生效。默认 true 。
};

type Result = {
  bgUrl: string; // 背景图
  puzzleUrl: string; // 拼图
  x: number; // x 轴偏移值，建议校验时前后阈值增减 5 的范围
  y: number; // y 轴偏移值，等高拼图时值始终为 0
};

// 创建拼图和背景图
function createPuzzle(imgUrl: string | Blob, options: Options = {}) {
  const {
    borderWidth = 2,
    borderColor = 'rgba(255,255,255,0.7)',
    fillColor = 'rgba(255,255,255,0.7)',
    points: outPoints,
    width = 60,
    height = 60,
    x: outX,
    y: outY,
    margin = 2,
    equalHeight = true,

    imageWidth,
    imageHeight,

    bgWidth: outBgWidth,
    bgHeight: outBgHeight,
    bgOffset: outBgOffset = [0, 0],

    bgImageType = MimeType.jpeg,
    quality = 0.8,
    format = 'dataURL',

    cacheImage = true,
    autoRevokePreviousBlobUrl = true,
    ajaxOptions,
  } = options;

  return new Promise<Result>((resolve, reject) => {
    const bgCanvas = document.createElement('canvas');
    const puzzleCanvas = document.createElement('canvas');

    const bgCtx = bgCanvas.getContext('2d')!;
    const puzzleCtx = puzzleCanvas.getContext('2d')!;

    const cacheKey = cacheImage ? getCacheKey(imgUrl) : undefined;

    asyncMemo
      .run(() => loadImageWithBlob(imgUrl, ajaxOptions), cacheKey)
      .then(({ image: img }) => {
        if (imageWidth) {
          img.width = imageWidth;
        }
        if (imageHeight) {
          img.height = imageHeight;
        }
        const bgWidth =
          typeof outBgWidth === 'number' && outBgWidth > 0
            ? outBgWidth > width
              ? outBgWidth
              : width
            : img.width;
        const bgHeight =
          typeof outBgHeight === 'number' && outBgHeight > 0
            ? outBgHeight > height
              ? outBgHeight
              : height
            : img.height;

        bgCanvas.width = bgWidth;
        bgCanvas.height = bgHeight;

        const maxOffsetX = bgWidth - width;
        const maxOffsetY = bgHeight - height;
        let x = typeof outX === 'undefined' ? randomInt(width, maxOffsetX) : outX || 0;
        let y = typeof outY === 'undefined' ? randomInt(0, maxOffsetY) : outY || 0;

        if (x < 0) {
          x = 0;
        } else if (x > maxOffsetX) {
          x = maxOffsetX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxOffsetY) {
          y = maxOffsetY;
        }

        const points =
          typeof outPoints === 'number' || !outPoints ? getRandomPoints(outPoints) : outPoints;
        const bgOffset =
          typeof outBgOffset === 'function' ? outBgOffset(img.width, img.height) : outBgOffset;

        // 背景图
        bgCtx.strokeStyle = borderColor;
        bgCtx.lineWidth = borderWidth;
        bgCtx.fillStyle = fillColor;
        drawPuzzle(bgCtx, { x, y, w: width, h: height, points, margin });
        bgCtx.fillStyle = fillColor;
        bgCtx.fill();
        bgCtx.globalCompositeOperation = 'destination-over';
        bgCtx.drawImage(img, bgOffset[0], bgOffset[1], img.width, img.height);

        puzzleCanvas.width = bgWidth;
        puzzleCanvas.height = bgHeight;

        // 拼图
        puzzleCtx.strokeStyle = borderColor;
        puzzleCtx.lineWidth = borderWidth;
        drawPuzzle(puzzleCtx, { x, y, w: width, h: height, points, margin });
        puzzleCtx.globalCompositeOperation = 'destination-over';
        puzzleCtx.clip();
        puzzleCtx.drawImage(img, bgOffset[0], bgOffset[1], img.width, img.height);

        // restore image
        const imgData = puzzleCtx.getImageData(x, y, width, height);
        puzzleCtx.clearRect(0, 0, bgWidth, bgHeight);
        puzzleCanvas.width = width;
        puzzleCanvas.height = equalHeight ? bgHeight : height;
        puzzleCtx.putImageData(imgData, 0, equalHeight ? y : 0);

        const formatBlob = format === 'blob';

        const puzzlePromise = canvasToImage(puzzleCanvas, formatBlob, MimeType.png, quality);
        const bgPromise = canvasToImage(bgCanvas, formatBlob, bgImageType, quality);

        Promise.all([puzzlePromise, bgPromise])
          .then(([puzzleUrl, bgUrl]) => {
            if (autoRevokePreviousBlobUrl) {
              if (previousBlobUrlCache.length) {
                revokeBlobUrls(previousBlobUrlCache);
                previousBlobUrlCache.length = 0;
              }

              if (formatBlob) {
                previousBlobUrlCache.push(bgUrl, puzzleUrl);
              }
            }
            resolve({
              puzzleUrl,
              bgUrl,
              x,
              y: equalHeight ? 0 : y,
            });
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

export { createPuzzle, getRandomPoints, Point, clearCache };
export type { Result, Options };

export default createPuzzle;

import { getRandomPoints, drawPuzzle, Point, getRandomInt, internalLoadImage } from './util';

const MimeType = {
  jpeg: 'image/jpeg',
  png: 'image/png',
};

type Options = {
  borderWidth?: number; // 描边宽度。默认 2
  borderColor?: string; // 描边颜色。默认 rgba(255,255,255,0.7)
  fillColor?: string; // 填充颜色。默认 rgba(255,255,255,0.7)
  points?: NonNullable<Parameters<typeof drawPuzzle>[1]>['points']; // 拼图点，不传默认随机2/3/4
  width?: number; // 宽度。默认 60
  height?: number; // 高度。默认 60
  x?: number; // x 轴偏移值，如果不传内部随机生成。
  y?: number; // y 轴偏移值，如果不传内部随机生成。
  margin?: number; // 上下左右留白。默认 2
  imageWidth?: number; // 自定义输入图片宽度。
  imageHeight?: number; // 自定义输入图片高度。
  bgWidth?: number; // 背景图宽度。默认 图片宽度
  bgHeight?: number; // 背景图高度。默认 图片高度
  bgOffset?: [number, number] | ((imgWidth: number, imgHeight: number) => [number, number]); // 背景图偏移值。 默认 [0,0]

  /**
   * @deprecated 即将废弃。
   */
  bgImageType?: string; // 背景图导出类型。默认 image/jpeg

  /**
   * @deprecated 即将废弃，请使用 quality 。
   */
  bgImageEncoderOptions?: number; // 背景图导出图片质量选项
  quality?: number; // 导出图片质量。默认 0.8 。
  cacheImage?: boolean; // 缓存最近加载成功的图片。默认为 true 。
};

type Result = {
  bgUrl: string; // 背景图
  puzzleUrl: string; // 拼图
  x: number; // x 轴偏移值，建议校验时前后阈值增减 5 的范围
  singlePuzzleUrl: string; // 不带透明背景的拼图，需要结合 singlePuzzleY 使用
  singlePuzzleY: number; // 不带透明背景的拼图 y 轴偏移值
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
    imageWidth,
    imageHeight,
    bgWidth: outBgWidth,
    bgHeight: outBgHeight,
    bgOffset: outBgOffset = [0, 0],
    bgImageType,
    bgImageEncoderOptions,
    quality = 0.8,
    cacheImage,
  } = options;

  return new Promise<Result>((resolve, reject) => {
    const bgCanvas = document.createElement('canvas');
    const puzzleCanvas = document.createElement('canvas');

    const bgCtx = bgCanvas.getContext('2d');
    const puzzleCtx = puzzleCanvas.getContext('2d');

    internalLoadImage(imgUrl, cacheImage)
      .then((img) => {
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

        let x = typeof outX === 'undefined' ? getRandomInt(bgWidth - width) : outX || 0;
        let y = typeof outY === 'undefined' ? getRandomInt(bgHeight - height) : outY || 0;

        if (x < 0) {
          x = 0;
        } else if (x > bgWidth - width) {
          x = bgWidth - width;
        }

        if (y < 0) {
          y = 0;
        } else if (y > bgHeight - height) {
          y = bgHeight - height;
        }

        const points =
          typeof outPoints === 'number' || !outPoints ? getRandomPoints(outPoints) : outPoints;
        const bgOffset =
          typeof outBgOffset === 'function' ? outBgOffset(img.width, img.height) : outBgOffset;

        if (bgCtx) {
          bgCtx.strokeStyle = borderColor;
          bgCtx.lineWidth = borderWidth;
          bgCtx.fillStyle = fillColor;
          drawPuzzle(bgCtx, { x, y, w: width, h: height, points, margin });
          bgCtx.fillStyle = fillColor;
          bgCtx.fill();
          bgCtx.globalCompositeOperation = 'destination-over';
          bgCtx.drawImage(img, bgOffset[0], bgOffset[1], img.width, img.height);
        }

        puzzleCanvas.width = bgWidth;
        puzzleCanvas.height = bgHeight;
        let puzzleUrl = '';
        let singlePuzzleUrl = '';

        if (puzzleCtx) {
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
          puzzleCtx.putImageData(imgData, 0, y);
          puzzleUrl = puzzleCanvas.toDataURL(MimeType.png, quality);

          // single image
          puzzleCtx.clearRect(0, 0, width, bgHeight);
          puzzleCanvas.width = width;
          puzzleCanvas.height = height;
          puzzleCtx.putImageData(imgData, 0, 0);
          singlePuzzleUrl = puzzleCanvas.toDataURL(MimeType.png, quality);
        }

        resolve({
          bgUrl: bgCanvas.toDataURL(bgImageType || MimeType.jpeg, bgImageEncoderOptions || quality),
          puzzleUrl,
          x,
          singlePuzzleUrl,
          singlePuzzleY: y,
        });
      })
      .catch(reject);
  });
}

export { getRandomPoints, drawPuzzle, getRandomInt, Point };
export type { Result, Options };

export default createPuzzle;

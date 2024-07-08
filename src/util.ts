import { randomInt } from 'ut2';

const mathPI = Math.PI;

// 拼图点
export enum Point {
  None, // 没有
  Outer, // 外部
  Inner, // 内部
}
export const pointArray = [Point.None, Point.Outer, Point.Inner];

// 随机选择数组中的某一项
function pick<T = any>(arr: T[]) {
  const len = arr.length;
  const randomIndex = randomInt(0, len - 1);
  return arr[randomIndex];
}

// 获取随机拼图点
export function getRandomPoints(pointNum?: 2 | 3 | 4) {
  const points = {
    top: pick(pointArray),
    right: pick(pointArray),
    bottom: pick(pointArray),
    left: pick(pointArray),
  };
  type PointKey = keyof typeof points;
  const pointsKeys = Object.keys(points) as PointKey[];
  const verticalDirs = ['top', 'bottom'] as PointKey[];
  const horizontalDirs = ['left', 'right'] as PointKey[];

  // 保证上下 和 左右 都必须有一个外部的拼图点
  if (points.top === Point.Outer && points.bottom === Point.Outer) {
    points[pick(verticalDirs)] = Point.Inner;
  } else if (points.top !== Point.Outer && points.bottom !== Point.Outer) {
    points[pick(verticalDirs)] = Point.Outer;
  }
  if (points.left === Point.Outer && points.right === Point.Outer) {
    points[pick(horizontalDirs)] = Point.Inner;
  } else if (points.left !== Point.Outer && points.right !== Point.Outer) {
    points[pick(horizontalDirs)] = Point.Outer;
  }

  if (pointNum) {
    const inners: PointKey[] = [];
    const nones: PointKey[] = [];
    pointsKeys.forEach((item) => {
      if (points[item] === Point.Inner) {
        inners.push(item);
      } else if (points[item] === Point.None) {
        nones.push(item);
      }
    });

    if (pointNum === 2) {
      inners.forEach((item) => (points[item] = Point.None));
    } else if (pointNum === 3) {
      if (inners.length === 0) {
        points[pick(nones)] = Point.Inner;
      } else if (inners.length === 2) {
        points[pick(inners)] = Point.None;
      }
    } else if (pointNum == 4) {
      nones.forEach((item) => (points[item] = Point.Inner));
    }
  }

  return points;
}

// 画拼图
export function drawPuzzle(
  ctx: CanvasRenderingContext2D,
  options: {
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    points?:
      | 2
      | 3
      | 4
      | {
          // 拼图点
          top: Point;
          right: Point;
          bottom: Point;
          left: Point;
        };
    margin?: number; // 外部留白
    needClosePath?: boolean; // 是否要闭合路径
  } = {},
) {
  const { x = 0, y = 0, w = 60, h = 60, needClosePath = true } = options;
  let { points, margin = 0 } = options;

  margin = margin <= 0 ? 0 : margin;

  if (typeof points === 'number' || !points) {
    points = getRandomPoints(points);
  }

  const r = (Math.min(w, h) - margin * 2) * 0.15; // 适合拼图点的比例 0.15
  const l = Math.hypot(r, r); // 斜边长度
  const l1_2 = l / 2; // 斜边长度一半，45度角直角三角形，邻边相等
  const c2r = r + l1_2; // 圆直径

  const rect = {
    x: x + margin,
    y: y + margin,
    w: w - c2r - margin * 2,
    h: h - c2r - margin * 2,
  };
  const w1_2 = rect.w / 2; // 矩形一半宽度
  const h1_2 = rect.h / 2; // 矩形一半高度

  if (points.left === Point.Outer) {
    rect.x += c2r;
  }
  if (points.top === Point.Outer) {
    rect.y += c2r;
  }

  // draw start
  ctx.beginPath();
  ctx.lineWidth = 2;

  // top
  ctx.moveTo(rect.x, rect.y);
  if (points.top !== Point.None) {
    ctx.lineTo(rect.x + w1_2 - l1_2, rect.y);
    if (points.top === Point.Inner) {
      ctx.arc(rect.x + w1_2, rect.y + l1_2, r, 1.25 * mathPI, 1.75 * mathPI, true);
    } else {
      ctx.arc(rect.x + w1_2, rect.y - l1_2, r, 0.75 * mathPI, 0.25 * mathPI);
    }
  }
  ctx.lineTo(rect.x + rect.w, rect.y);

  // right
  if (points.right !== Point.None) {
    ctx.lineTo(rect.x + rect.w, rect.y + h1_2 - l1_2);
    if (points.right === Point.Inner) {
      ctx.arc(rect.x + rect.w - l1_2, rect.y + h1_2, r, 1.75 * mathPI, 0.25 * mathPI, true);
    } else {
      ctx.arc(rect.x + rect.w + l1_2, rect.y + h1_2, r, 1.25 * mathPI, 0.75 * mathPI);
    }
  }
  ctx.lineTo(rect.x + rect.w, rect.y + rect.h);

  // bottom
  if (points.bottom !== Point.None) {
    ctx.lineTo(rect.x + w1_2 + l1_2, rect.y + rect.h);
    if (points.bottom === Point.Inner) {
      ctx.arc(rect.x + w1_2, rect.y + rect.h - l1_2, r, 0.25 * mathPI, 0.75 * mathPI, true);
    } else {
      ctx.arc(rect.x + w1_2, rect.y + rect.h + l1_2, r, 1.75 * mathPI, 1.25 * mathPI);
    }
  }
  ctx.lineTo(rect.x, rect.y + rect.h);

  // left
  if (points.left !== Point.None) {
    ctx.lineTo(rect.x, rect.y + h1_2 + l1_2);
    if (points.left === Point.Inner) {
      ctx.arc(rect.x + l1_2, rect.y + h1_2, r, 0.75 * mathPI, 1.25 * mathPI, true);
    } else {
      ctx.arc(rect.x - l1_2, rect.y + h1_2, r, 0.25 * mathPI, 1.75 * mathPI);
    }
  }
  ctx.lineTo(rect.x, rect.y);

  ctx.stroke();

  needClosePath && ctx.closePath();

  // ctx.fillStyle = "red";
  // ctx.fill();

  // ctx.strokeRect(x, y, w, h);
}

export function canvasToImage(
  canvas: HTMLCanvasElement,
  formatBlob: boolean,
  type: string,
  quality: number,
) {
  return new Promise<string>((resolve) => {
    if (formatBlob) {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          } else {
            resolve(canvas.toDataURL(type, quality));
          }
        },
        type,
        quality,
      );
    } else {
      resolve(canvas.toDataURL(type, quality));
    }
  });
}

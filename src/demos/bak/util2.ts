type Point = 'none' | 'outer' | 'inner';
const puzzlePoint: Point[] = ['none', 'outer', 'inner'];
const validPuzzlePoint = puzzlePoint.slice(1);
// const MAX_POINT = 4;

// 随机整数，大于等于 0 小于最大值
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

// 获取随机拼图点的值
const getRandomPuzzlePoint = () => puzzlePoint[getRandomInt(3)];

// 获取随机拼图点的有效值
const getRandomValidPuzzlePointValue = () => validPuzzlePoint[getRandomInt(3)];

// 获取随机拼图点的方向
const getRandomPointDir = () => (['top', 'right', 'bottom', 'left'] as const)[getRandomInt(4)];

// 画拼图
export function drawPuzzle(
  ctx: CanvasRenderingContext2D,
  x = 0,
  y = 0,
  w = 40,
  h = 40,
  options: {
    r?: number;
    points?: {
      top?: Point;
      right?: Point;
      bottom?: Point;
      left?: Point;
    };
  } = {}
) {
  const {
    r = 7,
    points = {
      top: getRandomPuzzlePoint(),
      right: getRandomPuzzlePoint(),
      bottom: getRandomPuzzlePoint(),
      left: getRandomPuzzlePoint()
    }
  } = options;

  const l = Math.hypot(r, r); // 斜边长度
  const l1_2 = l / 2; // 斜边长度一半，45度角直角三角形，邻边相等
  const c2r = r + l1_2; // 圆直径
  const w1_2 = w / 2; // 矩形一半宽度
  const h1_2 = h / 2; // 矩形一半高度

  if (
    points.top === 'none' &&
    points.right === 'none' &&
    points.bottom === 'none' &&
    points.left === 'none'
  ) {
    points[getRandomPointDir()] = getRandomValidPuzzlePointValue();
  }

  if (points.left === 'outer') {
    x += c2r;
  }
  if (points.top === 'outer') {
    y += c2r;
  }

  console.log(w + c2r, h + c2r);

  ctx.beginPath();

  // top
  ctx.moveTo(x, y);
  if (points.top !== 'none') {
    ctx.lineTo(x + w1_2 - l1_2, y);
    if (points.top === 'inner') {
      ctx.arc(x + w1_2, y + l1_2, r, 1.25 * Math.PI, 1.75 * Math.PI, true);
    } else {
      ctx.arc(x + w1_2, y - l1_2, r, 0.75 * Math.PI, 0.25 * Math.PI);
    }
    ctx.moveTo(x + w1_2 + l1_2, y);
  }
  ctx.lineTo(x + w, y);

  // right
  if (points.right !== 'none') {
    ctx.lineTo(x + w, y + h1_2 - l1_2);
    if (points.right === 'inner') {
      ctx.arc(x + w - l1_2, y + h1_2, r, 1.75 * Math.PI, 0.25 * Math.PI, true);
    } else {
      ctx.arc(x + w + l1_2, y + h1_2, r, 1.25 * Math.PI, 0.75 * Math.PI);
    }
    ctx.moveTo(x + w, y + h1_2 + l1_2);
  }
  ctx.lineTo(x + w, y + h);

  // bottom
  if (points.bottom !== 'none') {
    ctx.lineTo(x + w1_2 + l1_2, y + h);
    if (points.bottom === 'inner') {
      ctx.arc(x + w1_2, y + h - l1_2, r, 0.25 * Math.PI, 0.75 * Math.PI, true);
    } else {
      ctx.arc(x + w1_2, y + h + l1_2, r, 1.75 * Math.PI, 1.25 * Math.PI);
    }
    ctx.moveTo(x + w1_2 - l1_2, y + h);
  }
  ctx.lineTo(x, y + h);

  // left
  if (points.left !== 'none') {
    ctx.lineTo(x, y + h1_2 + l1_2);
    if (points.left === 'inner') {
      ctx.arc(x + l1_2, y + h1_2, r, 0.75 * Math.PI, 1.25 * Math.PI, true);
    } else {
      ctx.arc(x - l1_2, y + h1_2, r, 0.25 * Math.PI, 1.75 * Math.PI);
    }
    ctx.moveTo(x, y + h1_2 - l1_2);
  }
  ctx.lineTo(x, y);

  ctx.stroke();

  ctx.closePath();
}

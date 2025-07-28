// 计算 3/4 圆半径长度
// 45度直角三角形，两个邻边长度相等
// export function calcCircle3_4Radius(r: number, l: number) {
//   return Math.sqrt(r ** 2 - (l / 2) ** 2);
// }

type CircleDir = 'top' | 'right' | 'bottom' | 'left';

export function drawCircle3_4(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  dir: CircleDir = 'top'
) {
  let sAngle = 0;
  let eAngle = 0;

  const l = Math.hypot(r, r); // 斜边长度
  const c3_4r = l / 2;
  const startLine = [x, y];
  const line = [x, y];

  if (dir === 'top') {
    sAngle = 1.75;
    line[0] = x + l / 2;
    line[1] = y - c3_4r;

    startLine[0] = x - l / 2;
    startLine[1] = y - c3_4r;
  } else if (dir === 'right') {
    sAngle = 0.25;
    line[0] = x + c3_4r;
    line[1] = y + l / 2;

    startLine[0] = x + c3_4r;
    startLine[1] = y - l / 2;
  } else if (dir === 'bottom') {
    sAngle = 0.75;
    line[0] = x - l / 2;
    line[1] = y + c3_4r;

    startLine[0] = x + l / 2;
    startLine[1] = y + c3_4r;
  } else if (dir === 'left') {
    sAngle = 1.25;
    line[0] = x - c3_4r;
    line[1] = y - l / 2;

    startLine[0] = x - c3_4r;
    startLine[1] = y + l / 2;
  }

  eAngle = sAngle - 0.5;
  eAngle = eAngle < 0 ? eAngle + 2 : eAngle;

  // ctx.beginPath();
  // ctx.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
  // ctx.lineTo(line[0], line[1]);
  // ctx.stroke();
  // ctx.closePath();

  ctx.beginPath();
  ctx.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(startLine[0], startLine[1]);
  ctx.lineTo(line[0], line[1]);
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.closePath();
}

type Point = 'none' | 'outer' | 'inner';
const puzzlePoint: Point[] = ['none', 'outer', 'inner'];
const getRandomPuzzlePointValue = () => puzzlePoint[Math.floor(Math.random() * 3)];

export function drawPuzzle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  options: {
    r?: number; // 圆的半径
    points?: {
      top?: Point;
      right?: Point;
      bottom?: Point;
      left?: Point;
    };
    // min?: number;
  } = {}
) {
  const {
    r = 7.5,
    points = {
      top: getRandomPuzzlePointValue(),
      right: getRandomPuzzlePointValue(),
      bottom: getRandomPuzzlePointValue(),
      left: getRandomPuzzlePointValue()
    }
  } = options;

  const rect = {
    x,
    y,
    w,
    h
  };

  const l = Math.hypot(r, r); // 斜边长度
  const c3_4r = l / 2;

  // 圆在外面的位置
  const outerPos = {
    top: [rect.x + rect.w / 2, rect.y - c3_4r],
    right: [rect.x + rect.w + c3_4r, rect.y + rect.h / 2],
    bottom: [rect.x + rect.w / 2, rect.y + rect.h + c3_4r],
    left: [rect.x - c3_4r, rect.y + rect.h / 2]
  };

  // 圆在里面的位置
  const innerPos = {
    top: [rect.x + rect.w / 2, rect.y + c3_4r],
    right: [rect.x + rect.w - c3_4r, rect.y + rect.h / 2],
    bottom: [rect.x + rect.w / 2, rect.y + rect.h - c3_4r],
    left: [rect.x + c3_4r, rect.y + rect.h / 2]
  };

  // sharp
  ctx.strokeStyle = 'black';
  ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  if (points.top !== 'none') {
    let pos = [0, 0];
    let dir: CircleDir;
    if (points.top === 'inner') {
      pos = innerPos.top;
      dir = 'top';
    } else {
      pos = outerPos.top;
      dir = 'bottom';
    }
    drawCircle3_4(ctx, pos[0], pos[1], r, dir);
  }
  if (points.right !== 'none') {
    let pos = [0, 0];
    let dir: CircleDir;
    if (points.right === 'inner') {
      pos = innerPos.right;
      dir = 'right';
    } else {
      pos = outerPos.right;
      dir = 'left';
    }
    drawCircle3_4(ctx, pos[0], pos[1], r, dir);
  }
  if (points.bottom !== 'none') {
    let pos = [0, 0];
    let dir: CircleDir;
    if (points.bottom === 'inner') {
      pos = innerPos.bottom;
      dir = 'bottom';
    } else {
      pos = outerPos.bottom;
      dir = 'top';
    }
    drawCircle3_4(ctx, pos[0], pos[1], r, dir);
  }
  if (points.left !== 'none') {
    let pos = [0, 0];
    let dir: CircleDir;
    if (points.left === 'inner') {
      pos = innerPos.left;
      dir = 'left';
    } else {
      pos = outerPos.left;
      dir = 'right';
    }
    drawCircle3_4(ctx, pos[0], pos[1], r, dir);
  }
}

export function getImage(url: string) {
  // const isIE = window.navigator.userAgent.indexOf('Trident') > -1
  // if (isIE) { // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
  const xhr = new XMLHttpRequest();
  xhr.onloadend = function (e: ProgressEvent<EventTarget>) {
    console.log(e);
    // const file = new FileReader(); // FileReader仅支持IE10+
    // file.readAsDataURL(e.target!.response)
    // file.onloadend = function (e) {
    //   img.src = e.target.result
    // }
  };
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.send();
  // }
}

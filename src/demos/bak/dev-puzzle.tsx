import React, { useEffect, useRef } from 'react';
import { drawCircle3_4 } from './util';

function Demo() {
  const myCanvasRef1 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef2 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef3 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef4 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef5 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef6 = useRef<HTMLCanvasElement>(null);

  function draw() {
    const ctx1 = myCanvasRef1.current!.getContext('2d');
    const ctx2 = myCanvasRef2.current!.getContext('2d');
    const ctx3 = myCanvasRef3.current!.getContext('2d');
    const ctx4 = myCanvasRef4.current!.getContext('2d');
    const ctx5 = myCanvasRef5.current!.getContext('2d');
    const ctx6 = myCanvasRef6.current!.getContext('2d');

    // canvas内部规定线条的粗细是1px，颜色是黑色，但是实际情况下，粗细是2px，并且颜色不是纯黑色
    // 当需要绘制显示的时候，会采用以线条的中线去对齐页面上两个小格子之间的线条
    // 解决方法：向上挪动0.5px的像素，使其与1个像素的底部对齐
    // ref: https://blog.csdn.net/darabiuz/article/details/123733638
    const rect = {
      x: 40.5,
      y: 40.5,
      w: 40,
      h: 40,
    };

    const r = 7; // 圆的半径
    const l = Math.hypot(r, r); // 斜边长度
    const c3_4r = l / 2;

    // 圆在外面的位置
    const outerPos = {
      top: [rect.x + rect.w / 2, rect.y - c3_4r],
      right: [rect.x + rect.w + c3_4r, rect.y + rect.h / 2],
      bottom: [rect.x + rect.w / 2, rect.y + rect.h + c3_4r],
      left: [rect.x - c3_4r, rect.y + rect.h / 2],
    };

    // 圆在里面的位置
    const innerPos = {
      top: [rect.x + rect.w / 2, rect.y + c3_4r],
      right: [rect.x + rect.w - c3_4r, rect.y + rect.h / 2],
      bottom: [rect.x + rect.w / 2, rect.y + rect.h - c3_4r],
      left: [rect.x + c3_4r, rect.y + rect.h / 2],
    };

    // sharp 1
    ctx1?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx1!, outerPos.top[0], outerPos.top[1], r, 'bottom');
    drawCircle3_4(ctx1!, outerPos.right[0], outerPos.right[1], r, 'left');
    drawCircle3_4(ctx1!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');

    // sharp 2
    ctx2?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx2!, innerPos.top[0], innerPos.top[1], r, 'top');
    drawCircle3_4(ctx2!, innerPos.right[0], innerPos.right[1], r, 'right');
    drawCircle3_4(ctx2!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');
    drawCircle3_4(ctx2!, outerPos.left[0], outerPos.left[1], r, 'right');

    // sharp 3
    ctx3?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx3!, outerPos.top[0], outerPos.top[1], r, 'bottom');
    drawCircle3_4(ctx3!, innerPos.right[0], innerPos.right[1], r, 'right');
    drawCircle3_4(ctx3!, innerPos.bottom[0], innerPos.bottom[1], r, 'bottom');
    drawCircle3_4(ctx3!, innerPos.left[0], innerPos.left[1], r, 'left');

    // sharp 4
    ctx4?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx4!, innerPos.top[0], innerPos.top[1], r, 'top');
    drawCircle3_4(ctx4!, outerPos.right[0], outerPos.right[1], r, 'left');
    drawCircle3_4(ctx4!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');
    drawCircle3_4(ctx4!, outerPos.left[0], outerPos.left[1], r, 'right');

    // sharp 5
    ctx5?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx5!, innerPos.bottom[0], innerPos.bottom[1], r, 'bottom');
    drawCircle3_4(ctx5!, innerPos.left[0], innerPos.left[1], r, 'left');

    // sharp 6
    ctx6?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    drawCircle3_4(ctx6!, outerPos.right[0], outerPos.right[1], r, 'left');
    drawCircle3_4(ctx6!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef1} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef2} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef3} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef4} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef5} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef6} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
    </>
  );
}

export default Demo;

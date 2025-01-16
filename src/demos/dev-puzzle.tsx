/**
 * debug: true
 */
import React, { useEffect, useRef } from 'react';

function Demo() {
  const myCanvasRef1 = useRef<HTMLCanvasElement>(null);
  const myCanvasRef2 = useRef<HTMLCanvasElement>(null);

  function draw() {
    const ctx1 = myCanvasRef1.current!.getContext('2d');
    const ctx2 = myCanvasRef2.current!.getContext('2d');

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
    // const c3_4r = l / 2;

    // // 圆在外面的位置
    // const outerPos = {
    //   top: [rect.x + rect.w / 2, rect.y - c3_4r],
    //   right: [rect.x + rect.w + c3_4r, rect.y + rect.h / 2],
    //   bottom: [rect.x + rect.w / 2, rect.y + rect.h + c3_4r],
    //   left: [rect.x - c3_4r, rect.y + rect.h / 2],
    // };

    // // 圆在里面的位置
    // const innerPos = {
    //   top: [rect.x + rect.w / 2, rect.y + c3_4r],
    //   right: [rect.x + rect.w - c3_4r, rect.y + rect.h / 2],
    //   bottom: [rect.x + rect.w / 2, rect.y + rect.h - c3_4r],
    //   left: [rect.x + c3_4r, rect.y + rect.h / 2],
    // };

    // sharp
    // ctx?.strokeRect(rect.x, rect.y, rect.w, rect.h);
    // drawCircle3_4(ctx!, outerPos.top[0], outerPos.top[1], r, 'bottom');
    // drawCircle3_4(ctx!, outerPos.right[0], outerPos.right[1], r, 'left');
    // drawCircle3_4(ctx!, outerPos.bottom[0], outerPos.bottom[1], r, 'top');

    if (ctx1) {
      ctx1.beginPath();

      // outer top
      ctx1.moveTo(rect.x, rect.y);
      ctx1.lineTo(rect.x + rect.w / 2 - l / 2, rect.y);
      ctx1.arc(rect.x + rect.w / 2, rect.y - l / 2, r, 0.75 * Math.PI, 0.25 * Math.PI);
      ctx1.moveTo(rect.x + rect.w / 2 + l / 2, rect.y);
      ctx1.lineTo(rect.x + rect.w, rect.y);

      // outer right
      ctx1.lineTo(rect.x + rect.w, rect.y + rect.h / 2 - l / 2);
      ctx1.arc(rect.x + rect.w + l / 2, rect.y + rect.h / 2, r, 1.25 * Math.PI, 0.75 * Math.PI);
      ctx1.moveTo(rect.x + rect.w, rect.y + rect.h / 2 + l / 2);
      ctx1.lineTo(rect.x + rect.w, rect.y + rect.h);

      // outer bottom
      ctx1.lineTo(rect.x + rect.w / 2 + l / 2, rect.y + rect.h);
      ctx1.arc(rect.x + rect.w / 2, rect.y + rect.h + l / 2, r, 1.75 * Math.PI, 1.25 * Math.PI);
      ctx1.moveTo(rect.x + rect.w / 2 - l / 2, rect.y + rect.h);
      ctx1.lineTo(rect.x, rect.y + rect.h);

      // outer left
      ctx1.lineTo(rect.x, rect.y + rect.h / 2 + l / 2);
      ctx1.arc(rect.x - l / 2, rect.y + rect.h / 2, r, 0.25 * Math.PI, 1.75 * Math.PI);
      ctx1.moveTo(rect.x, rect.y + rect.h / 2 - l / 2);
      ctx1.lineTo(rect.x, rect.y);

      ctx1.strokeStyle = 'red';
      ctx1.stroke();

      ctx1.closePath();
    }

    if (ctx2) {
      ctx2.beginPath();

      // inner top
      ctx2.moveTo(rect.x, rect.y);
      ctx2.lineTo(rect.x + rect.w / 2 - l / 2, rect.y);
      ctx2.arc(rect.x + rect.w / 2, rect.y + l / 2, r, 1.25 * Math.PI, 1.75 * Math.PI, true);
      ctx2.moveTo(rect.x + rect.w / 2 + l / 2, rect.y);
      ctx2.lineTo(rect.x + rect.w, rect.y);

      // inner right
      ctx2.lineTo(rect.x + rect.w, rect.y + rect.h / 2 - l / 2);
      ctx2.arc(
        rect.x + rect.w - l / 2,
        rect.y + rect.h / 2,
        r,
        1.75 * Math.PI,
        0.25 * Math.PI,
        true,
      );
      ctx2.moveTo(rect.x + rect.w, rect.y + rect.h / 2 + l / 2);
      ctx2.lineTo(rect.x + rect.w, rect.y + rect.h);

      // inner bottom
      ctx2.lineTo(rect.x + rect.w / 2 + l / 2, rect.y + rect.h);
      ctx2.arc(
        rect.x + rect.w / 2,
        rect.y + rect.h - l / 2,
        r,
        0.25 * Math.PI,
        0.75 * Math.PI,
        true,
      );
      ctx2.moveTo(rect.x + rect.w / 2 - l / 2, rect.y + rect.h);
      ctx2.lineTo(rect.x, rect.y + rect.h);

      // inner left
      ctx2.lineTo(rect.x, rect.y + rect.h / 2 + l / 2);
      ctx2.arc(rect.x + l / 2, rect.y + rect.h / 2, r, 0.75 * Math.PI, 1.25 * Math.PI, true);
      ctx2.moveTo(rect.x, rect.y + rect.h / 2 - l / 2);
      ctx2.lineTo(rect.x, rect.y);

      ctx2.strokeStyle = 'red';
      ctx2.stroke();

      ctx2.closePath();
    }
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef1} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <canvas ref={myCanvasRef2} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
    </>
  );
}

export default Demo;

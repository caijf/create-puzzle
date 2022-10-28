import React, { useEffect, useRef } from 'react';
import { drawCircle3_4 } from './util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);

  function draw() {
    const ctx = myCanvasRef.current!.getContext('2d');
    // top
    // ctx?.beginPath();
    // ctx?.arc(50, 50, 25, 1.75 * Math.PI, 1.25 * Math.PI);
    // ctx?.stroke();
    // ctx?.closePath();
    drawCircle3_4(ctx!, 50, 50, 25, 'top');

    // right
    // ctx?.beginPath();
    // ctx?.arc(125, 50, 25, 0.25 * Math.PI, 1.75 * Math.PI);
    // ctx?.stroke();
    // ctx?.closePath();
    drawCircle3_4(ctx!, 125, 50, 25, 'right');

    // bottom
    // ctx?.beginPath();
    // ctx?.arc(50, 125, 25, 0.75 * Math.PI, 0.25 * Math.PI);
    // ctx?.stroke();
    // ctx?.closePath();
    drawCircle3_4(ctx!, 50, 125, 25, 'bottom');

    // left
    // ctx?.beginPath();
    // ctx?.arc(125, 125, 25, 1.25 * Math.PI, 0.75 * Math.PI);
    // ctx?.stroke();
    // ctx?.closePath();
    drawCircle3_4(ctx!, 125, 125, 25, 'left');
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <canvas ref={myCanvasRef} width="180" height="180" style={{ border: '1px solid #d3d3d3' }} />
  );
}

export default Demo;

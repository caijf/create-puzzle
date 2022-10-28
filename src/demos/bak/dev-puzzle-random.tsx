import React, { useEffect, useRef } from 'react';
import { drawPuzzle } from './util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);

  function draw() {
    if (!ctxRef.current) {
      // @ts-ignore
      ctxRef.current = myCanvasRef.current!.getContext('2d');
    }

    if (ctxRef.current) {
      const rect = {
        x: 40.5,
        y: 40.5,
        w: 40,
        h: 40,
      };

      // sharp
      drawPuzzle(ctxRef.current, rect.x, rect.y, rect.w, rect.h);
    }
  }

  function randomDraw() {
    if (ctxRef.current) {
      ctxRef.current.clearRect(0, 0, 120, 120);
    }
    draw();
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
      <div>
        <button onClick={randomDraw}>点我随机生成拼图</button>
      </div>
    </>
  );
}

export default Demo;

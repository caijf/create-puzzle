/**
 * debug: true
 */
import React, { useEffect, useRef, useState } from 'react';
import { drawPuzzle } from '../util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);
  const [size, setSize] = useState(60);
  const [margin, setMargin] = useState(0);
  const [points, setPoints] = useState<2 | 3 | 4>();

  function draw() {
    // @ts-ignore
    ctxRef.current = myCanvasRef.current!.getContext('2d');

    if (ctxRef.current) {
      const offset = (120 - size) / 2;
      drawPuzzle(ctxRef.current, {
        x: offset,
        y: offset,
        w: size,
        h: size,
        margin,
        points
      });
    }
  }

  function randomDraw() {
    if (ctxRef.current) {
      ctxRef.current.clearRect(0, 0, 120, 120);
      draw();
    }
  }

  function changeSize(e: any) {
    const { value } = e.target;
    const numValue = +value;
    if (numValue < 30) {
      setSize(30);
    } else if (numValue > 120) {
      setSize(120);
    } else {
      setSize(Math.floor(numValue) || 60);
    }
  }

  function changeMargin(e: any) {
    const { value } = e.target;
    const numValue = +value;
    if (numValue < 0) {
      setMargin(0);
    } else if (numValue > 20) {
      setMargin(20);
    } else {
      setMargin(Math.floor(numValue) || 0);
    }
  }

  function changePoints(e: any) {
    const { value } = e.target;
    // @ts-ignore
    setPoints(value ? +value : undefined);
  }

  useEffect(() => {
    draw();
  }, []);

  useEffect(() => {
    randomDraw();
  }, [size, margin, points]);

  return (
    <>
      <canvas ref={myCanvasRef} width="120" height="120" style={{ border: '1px solid red' }} />
      <div>
        拼图宽高：
        <input type="number" value={size} onInput={changeSize} onChange={changeSize} />
      </div>
      <div>
        留白：
        <input type="number" value={margin} onInput={changeMargin} onChange={changeMargin} />
      </div>
      <div>
        随机拼图点：
        <select onChange={changePoints} value={points}>
          <option value={''}>2/3/4</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <br />
      <button onClick={randomDraw}>点击重新生成拼图</button>
    </>
  );
}

export default Demo;

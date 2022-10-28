import React, { useEffect, useRef } from 'react';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);

  function draw() {
    const ctx = myCanvasRef.current!.getContext('2d');
    ctx?.rect(40.5, 40.5, 40, 40);
    ctx?.stroke();
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <canvas ref={myCanvasRef} width="120" height="120" style={{ border: '1px solid #d3d3d3' }} />
  );
}

export default Demo;

/**
 * debug: true
 */
import React, { useEffect, useRef } from 'react';
import DemoImage from './sunflower.jpg';
import { drawPuzzle } from '../util';

function Demo() {
  const myCanvasRef = useRef<HTMLCanvasElement>(null);
  const puzzleImageRef = useRef<HTMLImageElement>(null);

  function draw() {
    const ctx = myCanvasRef.current!.getContext('2d');

    const img = new Image();
    img.src = DemoImage;

    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      if (ctx) {
        myCanvasRef.current!.width = img.width;
        myCanvasRef.current!.height = img.height;
        ctx.drawImage(img, 0, 0);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        drawPuzzle(ctx, { x: 40, y: 40 });
        // ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
        // ctx.clip();

        // ctx.drawImage(img, 0, 0);

        // var imgData = ctx.getImageData(140, 140, 60, 60);
        // ctx.clearRect(0, 0, 500, 300);
        // ctx.putImageData(imgData, 60, 60);
      }

      // if (ctx) {
      //   // ctx?.moveTo(40.5, 40.5);
      //   ctx.rect(40.5, 40.5, 40, 40);
      //   ctx.lineWidth = 2;
      //   ctx.strokeStyle = 'white';
      //   ctx.stroke();

      //   ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      //   ctx.fill();
      //   // ctx.clip();

      //   // const dataURL = myCanvasRef.current?.toDataURL();
      //   // console.log(dataURL);

      //   // var imgData = ctx.getImageData(40.5, 40.5, 40, 40);
      //   // ctx.clearRect(0, 0, 500, 300);
      //   // ctx.putImageData(imgData, 40.5, 40.5);
      // }
    };
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <>
      <canvas ref={myCanvasRef} width="0" height="0" />
      <img src="" alt="" ref={puzzleImageRef} />
    </>
  );
}

export default Demo;

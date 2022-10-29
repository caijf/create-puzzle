import React, { useEffect, useState } from 'react';
import DemoImage from './sunflower.jpg';
import createPuzzle, { Result } from '..';

function Demo() {
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    createPuzzle(DemoImage).then((res) => {
      console.log(res);
      setResult(res);
    });
  }, []);

  return (
    <div>
      {result && (
        <div>
          <div>
            背景图：
            <img src={result.bgUrl} alt="" />
          </div>
          <div>
            拼图：
            <img src={result.puzzleUrl} alt="" />
          </div>
          <div>
            无透明背景的拼图：
            <img src={result.singlePuzzleUrl} alt="" />
          </div>
          <div>无透明背景的拼图 y 轴：{result.singlePuzzleY}</div>
          <div>x 轴偏移值：{result.x}</div>
        </div>
      )}
    </div>
  );
}

export default Demo;

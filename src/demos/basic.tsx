import React, { useEffect, useState } from 'react';
import createPuzzle, { Result } from 'create-puzzle';
import DemoImage from './sunflower.jpg';

function Demo() {
  const [result, setResult] = useState<Result>();

  const generate = () => {
    createPuzzle(DemoImage).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  useEffect(() => {
    generate();
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
      <br />
      <button onClick={generate}>点击重新生成</button>
    </div>
  );
}

export default Demo;

---
title: 拼图生成器
sidemenu: false
---

# create-puzzle

在浏览器端生成滑块验证码的拼图和背景图。

## 安装使用

安装

```bash
npm install create-puzzle
```

或

```bash
yarn add create-puzzle
```

浏览器环境中使用

```typescript
import createPuzzle from 'create-puzzle';

createPuzzle(imgUrl).then((res) => {
  console.log(res);
});
```

## 代码演示

<code src="./demos/dev-puzzle.tsx" />

<code src="./demos/dev-puzzle-random.tsx" />

<code src="./demos/dev-image.tsx" />

### 基础用法

<code src="./demos/basic.tsx" />

### 拼图生成器

<code src="./demos/custom.tsx" inline />

## API

```javascript
function createPuzzle(imgUrl: string, options?: Options): Promise<Result>;

type Options = {
  borderWidth?: number; // 描边宽度。默认 2
  borderColor?: string; // 描边颜色。默认 rgba(255,255,255,0.7)
  fillColor?: string; // 填充颜色。默认 rgba(255,255,255,0.7)
  points?:  2 | 3 | 4 | {
    top: Point;
    right: Point;
    bottom: Point;
    left: Point;
  }; // 拼图点，不传默认随机2/3/4
  width?: number;  // 宽度。默认 60
  height?: number; // 高度。默认 60
  x?: number; // x 轴偏移值，如果不传内部随机生成。
  y?: number; // y 轴偏移值，如果不传内部随机生成。
  margin?: number;  // 上下左右留白。默认 2
  bgWidth?: number; // 背景图宽度。默认 图片宽度
  bgHeight?: number; // 背景图高度。默认 图片高度
  bgOffset?: [number, number] | ((imgWidth: number, imgHeight: number) => [number, number]); // 背景图偏移值。 默认 [0,0]
  bgImageType?: string; // 背景图导出类型。默认 image/jpeg
  bgImageEncoderOptions?: any; // 背景图导出图片质量选项
}

type Result = {
  bgUrl: string; // 背景图
  puzzleUrl: string; // 拼图
  x: number; // x 轴偏移值，建议校验时前后阈值增减 5 的范围
  ratioX: number; // x 轴偏移比例
  singlePuzzleUrl: string; // 不带透明背景的拼图，需要结合 singlePuzzleY 使用
  singlePuzzleY: number; // 不带透明背景的拼图 y 轴偏移值
}

// 拼图点
enum Point {
  None = 'none',    // 没有
  Outer = 'outher', // 外部
  Inner = 'inner',  // 内部
}
```

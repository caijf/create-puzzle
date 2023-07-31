---
title: 创建拼图
sidemenu: false
---

# create-puzzle

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/caijf/create-puzzle.svg) [![GitHub Star][github-star]][github-url]

在浏览器端生成滑块验证码的拼图和背景图。

可以在客户端生成拼图，也可以使用它生成的拼图放到服务端图库，推荐搭配 [rc-slider-captcha] 使用。

## 使用

### es

安装依赖

```bash
npm install create-puzzle
```

或

```bash
yarn add create-puzzle
```

项目中使用

```typescript
import createPuzzle from 'create-puzzle';

createPuzzle(imgUrl).then((res) => {
  console.log(res);
});
```

### 原生 js 开发环境

如果你的项目使用的是原生方式开发，可以在浏览器中使用 script 标签直接引入文件，并使用全局变量 createPuzzle 。

npm 包的 dist 目录下提供了 UMD 包 createPuzzle.js 以及 createPuzzle.min.js。你也可以通过 [UNPKG](https://unpkg.com/create-puzzle/dist/) 下载到本地进行使用。或者直接使用 [UNPKG 线上版本](https://unpkg.com/create-puzzle@latest/dist/createPuzzle.min.js)<sup>注意版本</sup>。

## 代码演示

<code src="./demos/dev-puzzle.tsx" />

<code src="./demos/dev-puzzle-random.tsx" />

<code src="./demos/dev-image.tsx" />

### 基础用法

<code src="./demos/basic.tsx" />

### 拼图生成器

[点击进入](./generator)

## API

```javascript
function createPuzzle(imgUrl: string | Blob, options?: Options): Promise<Result>;

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
  imageWidth?: number; // 自定义图片宽度。
  imageHeight?: number; // 自定义图片高度。
  bgWidth?: number; // 背景图宽度。默认 图片宽度
  bgHeight?: number; // 背景图高度。默认 图片高度
  bgOffset?: [number, number] | ((imgWidth: number, imgHeight: number) => [number, number]); // 背景图偏移值。 默认 [0,0]
  bgImageType?: string; // 背景图导出类型。默认 image/jpeg
  bgImageEncoderOptions?: any; // 背景图导出图片质量选项
}

type Result = {
  bgUrl: string; // 背景图
  puzzleUrl: string; // 拼图
  x: number; // x 轴偏移值。如果使用该值校验，建议前后阈值增减 5 的范围
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

[rc-slider-captcha]: https://caijf.github.io/rc-slider-captcha/index.html
[npm]: https://img.shields.io/npm/v/create-puzzle.svg
[npm-url]: https://npmjs.com/package/create-puzzle
[github-star]: https://img.shields.io/github/stars/caijf/create-puzzle?style=social
[github-url]: https://github.com/caijf/create-puzzle

---
title: 创建拼图
toc: content
---

# create-puzzle

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/caijf/create-puzzle.svg) [![GitHub Star][github-star]][github-url]

在浏览器端生成滑块验证码的拼图和背景图。

可以在客户端生成拼图，也可以使用它生成的拼图放到服务端图库，推荐搭配 [rc-slider-captcha] 使用。

如果你使用的是 Node.js 做服务端，推荐使用 [node-puzzle](https://www.npmjs.com/package/node-puzzle)。

<embed src="../README.md#L18-L57"></embed>

## 代码演示

<!-- 路径拼图 -->

<code src="../src/demos/dev-puzzle.tsx"></code>

<!-- 随机拼图 -->

<code src="../src/demos/dev-puzzle-random.tsx"></code>

<!-- 图像 -->

<code src="../src/demos/dev-image.tsx"></code>

### 基础用法

<code src="../src/demos/basic.tsx"></code>

### 拼图生成器

[点击进入](./generator)

<br/>

## API

<embed src="../README.md#L60-L1000"></embed>

[rc-slider-captcha]: https://caijf.github.io/rc-slider-captcha/
[npm]: https://img.shields.io/npm/v/create-puzzle.svg
[npm-url]: https://npmjs.com/package/create-puzzle
[github-star]: https://img.shields.io/github/stars/caijf/create-puzzle?style=social
[github-url]: https://github.com/caijf/create-puzzle

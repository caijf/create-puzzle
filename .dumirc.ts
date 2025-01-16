import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const publicPath = isDev ? '/' : '/create-puzzle/';

export default defineConfig({
  themeConfig: {
    name: 'create-puzzle',
    logo: 'https://www.caijinfeng.com/logo.png',
    nav: [],
    prefersColor: {
      default: 'light',
      switch: false,
    },
    footer: `<div>
    <div>caijf | Copyright © 2022-present</div>
    <div>Powered by <a href="https://d.umijs.org/" target="_blank">dumi</a></div>
    </div>`,
  },
  favicons: ['https://www.caijinfeng.com/favicon.ico'],
  base: publicPath,
  publicPath,
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  analytics: {
    ga_v2: 'G-22TYFJH82L',
  },
  styles: [
    `body .dumi-default-doc-layout {
      background: white;
    }
    body .dumi-default-doc-layout > main{
      padding-top: 24px;
    }
    body .dumi-default-header{
      display: none;
    }
    body .dumi-default-header-left {
      width: auto;
    }
    body .dumi-default-header-menu-btn{
      display: none;
    }
    body .dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper {
      top: 52px;
    }
    @media screen and (max-width: 400px){
      body .dumi-default-previewer-demo{
        padding: 40px 12px;
      }
      body .dumi-default-doc-layout > main {
        padding: 0 12px;
      }
    }`,
  ],
});

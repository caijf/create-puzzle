import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';
const publicPath = !isDev ? '/create-puzzle/' : '/';

export default defineConfig({
  title: 'create-puzzle',
  history: {
    type: 'hash',
  },
  hash: true,
  publicPath,
  favicon: 'https://www.caijinfeng.com/favicon.ico',
  logo: 'https://www.caijinfeng.com/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  nodeModulesTransform: {
    type: isDev ? 'none' : 'all',
  },
  targets: {
    ie: 11,
  },
  polyfill: {
    imports: ['element-remove', 'core-js'],
  },
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-22TYFJH82L',
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-22TYFJH82L');
    `,
    },
  ],
  styles: [
    `body .__dumi-default-navbar{
      display: none;
    }`,
  ],
});

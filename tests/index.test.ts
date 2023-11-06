/**
 * @jest-environment jsdom
 */
import { sleep } from 'ut2';
import createPuzzle, { Point } from '../src';

enum ImageLoadStatus {
  Success,
  Error,
}
let imageLoadStatus = ImageLoadStatus.Success;

Object.defineProperties(globalThis.Image.prototype, {
  src: {
    set() {
      if (imageLoadStatus === ImageLoadStatus.Error) {
        setTimeout(() => this.onerror(new Error('load error')));
      } else {
        setTimeout(() => this.onload());
      }
    },
  },
  width: {
    get() {
      return 360;
    },
  },
  height: {
    get() {
      return 160;
    },
  },
});

// ref: https://stackoverflow.com/questions/28584773/xmlhttprequest-testing-in-jest
enum ResponseMethod {
  Load,
  Error,
}
// eslint-disable-next-line prefer-const
let resMethod = ResponseMethod.Load; // 将要触发的响应方法
// eslint-disable-next-line prefer-const
let responseStatus = 200; // 将要触发的响应状态码
const sendMock = jest.fn();
const spyAjax = jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => {
  const methods: Record<string, (...args: any[]) => void> = {};

  async function send() {
    methods.loadstart?.();

    if (resMethod === ResponseMethod.Error) {
      methods.error(new Error('ajax error'));
    } else {
      await sleep(100);

      const res = {
        target: {
          response: new Blob(['hello word']),
          status: responseStatus,
        },
      };

      // @ts-ignore
      methods.load(res);
    }
    methods.loadend?.();
  }

  return {
    addEventListener: jest.fn().mockImplementation(function (fnName, fn) {
      methods[fnName] = fn;
    }),
    open: jest.fn(),
    removeEventListener: jest.fn(),
    send: sendMock.mockImplementation(send),
    setRequestHeader: jest.fn(),
  } as any;
});

const consoleError = jest.fn();
const spyConsoleError = jest.spyOn(globalThis.console, 'error').mockImplementation(consoleError);

describe('createPuzzle', () => {
  beforeEach(() => {
    imageLoadStatus = ImageLoadStatus.Success;
    resMethod = ResponseMethod.Load;
    responseStatus = 200;
    sendMock.mockClear();
    consoleError.mockClear();
  });

  afterAll(() => {
    spyAjax.mockRestore();
    spyConsoleError.mockRestore();
  });

  it('load url', async () => {
    const res = await createPuzzle('https://example.com/image');

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('y');

    expect(sendMock).toHaveBeenCalledTimes(1);
  });

  it('load blob', async () => {
    const res = await createPuzzle(new Blob(['abc']));

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('y');

    expect(sendMock).toHaveBeenCalledTimes(0);
  });

  it('load with cache', async () => {
    const url = 'https://example.com/someimage';
    expect(sendMock).toHaveBeenCalledTimes(0);

    await createPuzzle(url);
    expect(sendMock).toHaveBeenCalledTimes(1);

    await createPuzzle(url);
    expect(sendMock).toHaveBeenCalledTimes(1);
  });

  it('load with not cache', async () => {
    const url = 'https://example.com/someimage';
    expect(sendMock).toHaveBeenCalledTimes(0);

    await createPuzzle(url, {
      cacheImage: false,
    });
    expect(sendMock).toHaveBeenCalledTimes(1);

    await createPuzzle(url, {
      cacheImage: false,
    });
    expect(sendMock).toHaveBeenCalledTimes(2);
  });

  it('define x and y', async () => {
    const res = await createPuzzle('https://example.com/image', { x: 0, y: 0 });
    expect(res.x).toBe(0);
    expect(res.y).toBe(0);

    const res2 = await createPuzzle('https://example.com/image', {
      x: 10,
      y: 10,
      equalHeight: false,
    });
    expect(res2.x).toBe(10);
    expect(res2.y).toBe(10);

    expect(res.x).toBe(0);
    expect(res.y).toBe(0);
  });

  it('options types', async () => {
    const res = await createPuzzle('https://example.com/image', {
      width: 100,
      height: 100,
      borderWidth: 2,
      borderColor: 'rgba(255,255,255,0.7)',
      fillColor: 'rgba(255,255,255,0.7)',
      // points: 2,
      points: { top: Point.None, right: Point.Inner, bottom: Point.Outer, left: Point.Inner },
      margin: 2,
      bgWidth: 200,
      bgHeight: 500,
      // bgOffset: [1, 2]
      bgOffset: (imgWidth, imgHeight) => [imgWidth + 1, imgHeight + 2],
      bgImageType: 'image/png',
      quality: 0.92,
      imageWidth: 320,
      imageHeight: 160,
    });

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('y');
  });

  it('format blob', async () => {
    const res = await createPuzzle('https://example.com/image', {
      format: 'blob',
      quality: 0.5,
    });

    expect(res.bgUrl.indexOf('blob://') !== -1).toBe(true);
    expect(res.puzzleUrl.indexOf('blob://') !== -1).toBe(true);
  });

  it('自定义请求配置项', async () => {
    await createPuzzle('abc', { ajaxOptions: { data: 'abc' } });
    expect(sendMock).toHaveBeenCalledWith('abc');
  });

  it('ajax error', async () => {
    expect(consoleError).toHaveBeenCalledTimes(0);
    resMethod = ResponseMethod.Error;
    try {
      await createPuzzle('https://example.com/image');
    } catch (err: any) {
      expect(err.message).toBe('ajax error');
    }
    expect(consoleError).toHaveBeenCalledTimes(1);
  });

  it('image load error', async () => {
    expect(consoleError).toHaveBeenCalledTimes(0);
    imageLoadStatus = ImageLoadStatus.Error;
    try {
      await createPuzzle('https://example.com/image');
    } catch (err: any) {
      expect(err.message).toBe('load error');
    }
    expect(consoleError).toHaveBeenCalledTimes(1);
  });
});

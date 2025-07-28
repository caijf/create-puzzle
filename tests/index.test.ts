/**
 * @jest-environment jsdom
 */
import createPuzzle, { Point } from '../src';
import { createSpyConsoleError } from './fixtures/spyConsole';
import {
  ResponseMethod,
  createSpyAjax,
  setResponseMethod,
  setResponseStatus
} from './fixtures/spyAjax';
import { mockImage, restoreImage, setImageLoadStatus } from './fixtures/mockImage';

const sendMock = jest.fn();
const spyAjax = createSpyAjax({
  send: sendMock
});

const spyConsoleError = createSpyConsoleError();
mockImage();

describe('createPuzzle', () => {
  beforeEach(() => {
    setImageLoadStatus(true);
    setResponseMethod(ResponseMethod.Load);
    setResponseStatus(200);
    sendMock.mockClear();
    spyConsoleError.mockClear();
  });

  afterAll(() => {
    spyAjax.mockRestore();
    spyConsoleError.mockRestore();
    restoreImage();
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
      cacheImage: false
    });
    expect(sendMock).toHaveBeenCalledTimes(1);

    await createPuzzle(url, {
      cacheImage: false
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
      equalHeight: false
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
      imageHeight: 160
    });

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('y');
  });

  it('format blob', async () => {
    const res = await createPuzzle('https://example.com/image', {
      format: 'blob',
      quality: 0.5
    });

    expect(res.bgUrl.indexOf('blob://') !== -1).toBe(true);
    expect(res.puzzleUrl.indexOf('blob://') !== -1).toBe(true);
  });

  it('自定义请求配置项', async () => {
    await createPuzzle('abc', { ajaxOptions: { data: 'abc' } });
    expect(sendMock).toHaveBeenCalledWith('abc');
  });

  it('ajax error', async () => {
    expect(spyConsoleError).toHaveBeenCalledTimes(0);
    setResponseMethod(ResponseMethod.Error);
    try {
      await createPuzzle('https://example.com/image', { cacheImage: false });
    } catch (err: any) {
      expect(err.message).toBe('ajax error');
    }
    expect(spyConsoleError).toHaveBeenCalledTimes(1);
  });

  it('image load error', async () => {
    expect(spyConsoleError).toHaveBeenCalledTimes(0);
    setImageLoadStatus(false);
    try {
      await createPuzzle('https://example.com/image', { cacheImage: false });
    } catch (err: any) {
      expect(err.message).toBe('load error');
    }
    expect(spyConsoleError).toHaveBeenCalledTimes(1);
  });
});

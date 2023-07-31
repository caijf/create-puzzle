/**
 * @jest-environment jsdom
 */

import createPuzzle, { Point } from '../src';

describe('createPuzzle', () => {
  // ref: https://stackoverflow.com/questions/44462665/how-do-you-use-jest-to-test-img-onerror
  const LOAD_FAILURE_SRC = 'data:LOAD_FAILURE_SRC';
  const LOAD_SUCCESS_SRC = 'data:LOAD_SUCCESS_SRC';

  beforeAll(() => {
    Object.defineProperties(globalThis.Image.prototype, {
      src: {
        set(src) {
          if (src === LOAD_FAILURE_SRC) {
            setTimeout(() => this.onerror(new Error('mocked error')));
          } else if (src === LOAD_SUCCESS_SRC) {
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
  });

  it('returned value', async () => {
    const res = await createPuzzle(LOAD_SUCCESS_SRC);
    // console.log('res: ', res);

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('singlePuzzleUrl');
    expect(res).toHaveProperty('singlePuzzleY');
  });

  it('define x and y', async () => {
    const res = await createPuzzle(LOAD_SUCCESS_SRC, { x: 0, y: 0 });
    // console.log('res: ', res);

    expect(res.x).toBe(0);
    expect(res.singlePuzzleY).toBe(0);
  });

  it('options types', async () => {
    const res = await createPuzzle(LOAD_SUCCESS_SRC, {
      x: 0,
      y: 0,
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
      bgImageEncoderOptions: 0.92,
      imageWidth: 320,
      imageHeight: 160,
    });
    // console.log('res: ', res);

    expect(res).toHaveProperty('x');
    expect(res).toHaveProperty('bgUrl');
    expect(res).toHaveProperty('puzzleUrl');
    expect(res).toHaveProperty('singlePuzzleUrl');
    expect(res).toHaveProperty('singlePuzzleY');
  });

  it('failure', async () => {
    try {
      const res = await createPuzzle(LOAD_FAILURE_SRC);
      console.log('res: ', res);
    } catch (err: any) {
      expect(err.message).toBe('mocked error');
    }
  });
});

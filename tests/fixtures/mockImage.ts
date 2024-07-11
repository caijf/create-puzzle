let errorMessage = 'load error';
export function setImageLoadErrorMessage(str: string) {
  errorMessage = str;
}

// 控制图片加载成功 或 失败
let loadSuccess = true;
export function setImageLoadStatus(status: boolean) {
  loadSuccess = status;
}

class XImage extends Image {
  [x: string]: any;
  constructor() {
    super();

    this.width = 360;
    this.height = 160;
    setTimeout(() => {
      if (loadSuccess) {
        // @ts-ignore
        this.onload();
      } else {
        // @ts-ignore
        this.onerror(new Error(errorMessage));
      }
    }, 100);
  }
}

let temp: typeof globalThis.Image;

export function mockImage() {
  temp = globalThis.Image;
  globalThis.Image = XImage;
}

export function restoreImage() {
  loadSuccess = true;
  errorMessage = 'load error';
  globalThis.Image = temp;
}

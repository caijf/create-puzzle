import { sleep } from 'ut2';

// 参考: https://stackoverflow.com/questions/28584773/xmlhttprequest-testing-in-jest
export enum ResponseMethod {
  Load,
  Abort,
  Timeout,
  Error,
}

// 将要触发的响应方法
let resMethod = ResponseMethod.Load;
export function setResponseMethod(method: ResponseMethod) {
  resMethod = method;
}

// 将要触发的响应状态码
let responseStatus = 200;
export function setResponseStatus(status: number) {
  responseStatus = status;
}

export function createSpyAjax(opts?: {
  open?: jest.Mock<any, any, any>;
  send?: jest.Mock<any, any, any>;
  setRequestHeader?: jest.Mock<any, any, any>;
}) {
  const xhrMock = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    ...opts,
  };

  const spyAjax = jest.spyOn(globalThis, 'XMLHttpRequest').mockImplementation(() => {
    const methods: Record<string, (...args: any[]) => void> = {};

    async function send() {
      methods.loadstart?.();

      if (resMethod === ResponseMethod.Abort) {
        methods.abort();
      } else if (resMethod === ResponseMethod.Error) {
        methods.error(new Error('ajax error'));
      } else if (resMethod === ResponseMethod.Timeout) {
        methods.timeout();
      } else {
        await sleep(100);
        methods.progress?.();
        await sleep(100);
        methods.progress?.();

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
      open: xhrMock.open,
      removeEventListener: jest.fn(),
      send: xhrMock.send.mockImplementation(send),
      setRequestHeader: xhrMock.setRequestHeader,
    } as any;
  });

  return spyAjax;
}

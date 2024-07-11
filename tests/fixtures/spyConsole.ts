export function createSpyConsoleError() {
  return jest.spyOn(globalThis.console, 'error').mockImplementation(() => {});
}

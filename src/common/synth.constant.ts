// @ts-ignore
if (global.window === undefined) {
  // @ts-ignore
  global.window = global;
}
// @ts-ignore
export const window = global.window;
export const synth = window.speechSynthesis;

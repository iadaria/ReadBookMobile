import {window} from './synth.constant';

export const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

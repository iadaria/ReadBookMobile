import {synth} from '../../common/synth.constant';

export const webSpeak = (voiceId: number, text: string) => {
  //@ts-ignore
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = synth.getVoices()[voiceId];

  synth.speak(utterance);
};

import {synth} from '../../common/synth.constant';

export const webSpeak = (text: string, voiceName?: string) => {
  if (!synth.speaking) {
    //@ts-ignore
    const utterance = new SpeechSynthesisUtterance(text);
    let voice;
    if (voiceName) {
      voice = synth.getVoices().find((v: any) => equal(v.name, voiceName));
    } else {
      voice = synth.getVoices()[0];
    }
    utterance.voice = voice;

    console.log(voiceName, 'speaking with', voice.name);
    synth.speak(utterance);
  }
};

export const webStopSpeak = () => {
  if (synth.speaking) {
    synth.cancel();
  }
};

export const equal = (a1: string, a2: string) =>
  a1.toLowerCase() === a2.toLowerCase();

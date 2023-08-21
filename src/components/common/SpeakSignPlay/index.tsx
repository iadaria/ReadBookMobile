import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {webSpeak, webStopSpeak} from 'src/utils/web/tts';
import {styles as s} from './SpeakSignPlay.style';
import {useWord, useWordDispatch} from 'src/store/context';

interface SpeakSignPlayProps {
  text: string;
  idx: number;
}

export const SpeakSignPlay: React.FC<SpeakSignPlayProps> = ({text, idx}) => {
  const {
    voiceName,
    speak: {isSpeaking, idx: index},
  } = useWord();
  const dispatch = useWordDispatch();

  const onPlay = () => {
    dispatch({type: 'set_is_speaking', speak: {isSpeaking: true, idx}});
    webSpeak(text, voiceName);
  };

  const onStop = () => {
    dispatch({type: 'set_is_speaking', speak: {isSpeaking: false, idx}});
    webStopSpeak();
  };

  if (isSpeaking && idx === index) {
    return (
      <TouchableOpacity onPress={onStop}>
        <Image style={s.play} source={require('./stop.png')} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPlay}>
      <Image style={s.play} source={require('./play.png')} />
    </TouchableOpacity>
  );
};

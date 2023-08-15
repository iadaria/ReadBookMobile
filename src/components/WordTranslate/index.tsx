import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {getTranslate} from '../../utils/dictionary';
import {styles as s} from './WordTranslate.style';
import {webSpeak} from '../../utils/web/tts';
import {useWord} from '../../store/context';

export const WordTranslate = (): JSX.Element => {
  const [translate, setTranslate] = useState<string>();
  const {word, voiceName} = useWord();

  useEffect(() => {
    if (word) {
      // isWeb
      webSpeak(word, voiceName);
      getTranslate(word).then(setTranslate);
    }
  }, [word, voiceName]);

  if (word) {
    return <Text style={s.word}>{translate}</Text>;
  }

  return <></>;
};

import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {getTranslate} from '../../utils/dictionary';
import {styles as s} from './WordTranslate.style';
import {webSpeak} from '../../utils/web/tts';
import {useWord} from '../../store/context';

const VOICE_ID = 50;

export const WordTranslate = (): JSX.Element => {
  const [translate, setTranslate] = useState<string>();
  const {word} = useWord();

  useEffect(() => {
    if (word) {
      // isWeb
      webSpeak(VOICE_ID, word);
      getTranslate(word).then(setTranslate);
    }
  }, [word]);

  if (word) {
    return <Text style={s.word}>{translate}</Text>;
  }

  return <></>;
};

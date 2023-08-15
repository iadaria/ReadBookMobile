import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import {styles as s} from './WordTranslate.style';
import {useWord} from '../../../store/context';
import {webSpeak} from '../../../utils/web/tts';
import {getTranslate} from '../../../utils/dictionary';

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

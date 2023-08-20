import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles as s} from './WordTranslate.style';
import {useWord} from 'src/store/context';
import {webSpeak} from 'src/utils/web/tts';
import {getTranslate} from 'src/utils/dictionary';

export const WordTranslate = (): JSX.Element => {
  const [translate, setTranslate] = useState<string>();
  const {word, voiceName} = useWord();

  useEffect(() => {
    if (word) {
      // isWeb
      console.log(`selected word: "${word}"`);
      webSpeak(word, voiceName);
      getTranslate(word).then(setTranslate);
    }
  }, [word, voiceName]);

  if (word) {
    return (
      <Text style={s.word}>
        <TouchableOpacity onPress={() => webSpeak(word, voiceName)}>
          <Image style={s.play} source={require('./play.png')} />
        </TouchableOpacity>
        {translate}
      </Text>
    );
  }

  return <></>;
};

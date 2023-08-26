import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles as s} from './WordTranslate.style';
import {useWord, useWordDispatch} from 'src/store/context';
import {webSpeak} from 'src/utils/web/tts';
import {getTranslate} from 'src/utils/dictionary';

export const WordTranslate = (): JSX.Element => {
  const [translate, setTranslate] = useState<string>();
  const {word, voiceName} = useWord();

  const dispatch = useWordDispatch();

  useEffect(() => {
    if (word) {
      // isWeb
      console.log(`selected word: "${word}"`);
      webSpeak(word, voiceName);
      getTranslate(word)
        .then(setTranslate)
        .catch(e => {
          console.log('Dictionary error. Checking -e', e.message);
          const len = word.length;
          if (word[len - 1] === 's') {
            dispatch({type: 'set_word', word: word.substring(0, len - 1)});
          }
          throw new Error('Empty translate');
        })
        .catch(e => {
          console.log('Dictionary error. Checking -es', e.message);
          const len = word.length;
          if (word.substring(len - 2) === 'es') {
            dispatch({type: 'set_word', word: word.substring(0, len - 2)});
          }
        });
    }
  }, [word, voiceName, dispatch]);

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

import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useWordContext} from '../../store/context';
import {getParticular} from '../../utils/dictionary';

export const WordTranslate = (): JSX.Element => {
  const [translate, setTranslate] = useState<string>();
  const {
    wordState: {word},
  } = useWordContext();

  useEffect(() => {
    getParticular().then(setTranslate);
  }, [word]);

  if (word) {
    return <Text>{translate}</Text>;
  }

  return <></>;
};

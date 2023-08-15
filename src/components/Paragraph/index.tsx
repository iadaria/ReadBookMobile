import React from 'react';
import {GestureResponderEvent, Text} from 'react-native';
import {useWordDispatch} from '../../store/context';

interface ParagraphProps {
  words: string[];
}

export const Paragraph: React.FC<ParagraphProps> = ({words}): JSX.Element => {
  const dispatch = useWordDispatch();

  const onTextPress = (event: GestureResponderEvent, word: string) => {
    //console.log(event.nativeEvent.pageX);
    dispatch({
      type: 'set_word',
      word,
    });
  };
  const Words = words.map((word, index) => (
    <Text
      key={`item-${index}`}
      onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
  ));
  return <>{Words}</>;
};

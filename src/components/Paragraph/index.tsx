import React from 'react';
import {GestureResponderEvent, Text} from 'react-native';
import {useWordContext} from '../../store/context';

interface ParagraphProps {
  words: string[];
}

export const Paragraph: React.FC<ParagraphProps> = ({words}): JSX.Element => {
  const {/*wordState*/ wordDispatch} = useWordContext();

  const onTextPress = (event: GestureResponderEvent, word: string) => {
    //console.log(event.nativeEvent.pageX);
    wordDispatch({type: 'set_word', word});
  };
  const Words = words.map((word, index) => (
    <Text
      key={`item-${index}`}
      onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
  ));
  return <>{Words}</>;
};

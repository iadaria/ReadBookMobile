import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {styles as s} from './Paragraph.style';
import {useWord, useWordDispatch} from '../../../store/context';
import {webSpeak} from '../../../utils/web/tts';

interface ParagraphProps {
  content: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({content}): JSX.Element => {
  const {voiceName} = useWord();
  const dispatch = useWordDispatch();
  const words = content.split(' ');

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
  return (
    <>
      <TouchableOpacity onPress={() => webSpeak(content, voiceName)}>
        <Image style={s.play} source={require('./play.png')} />
      </TouchableOpacity>
      {Words}
      <Image style={s.translate} source={require('./translate.png')} />
    </>
  );
};

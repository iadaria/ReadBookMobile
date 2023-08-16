import React, {FC, useMemo, useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles as s} from './Paragraph.style';
import {useWord, useWordDispatch} from '../../../store/context';
import {webSpeak} from '../../../utils/web/tts';
import {translateParagraph} from '../../../requests/paragraph.request';

interface TranslatedParagraphProps {
  content: string;
}

const TranslatedParagraph: FC<TranslatedParagraphProps> = ({content}) => {
  const [text, setText] = useState<undefined | string>('');

  useMemo(async () => {
    if (!text) {
      const text = await translateParagraph(content);
      setText(text);
    }
  }, [content, text]);

  if (!content) {
    return <></>;
  }

  return <Text>{text}</Text>;
};

interface ParagraphProps {
  content: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({content}): JSX.Element => {
  const [isTranslate, toggleTranslate] = useState(false);

  const {voiceName} = useWord();
  const dispatch = useWordDispatch();
  const words = content.split(' ');

  const onTextPress = (event: GestureResponderEvent, word: string) => {
    dispatch({type: 'set_word', word});
  };

  const Words = words.map((word, index) => (
    <Text
      key={`item-${index}`}
      onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
  ));

  return (
    <View style={s.box}>
      <Text>
        <TouchableOpacity onPress={() => webSpeak(content, voiceName)}>
          <Image style={s.play} source={require('./play.png')} />
        </TouchableOpacity>
        {Words}
        <TouchableOpacity onPress={() => toggleTranslate(!isTranslate)}>
          <Image style={s.translate} source={require('./translate.png')} />
        </TouchableOpacity>
      </Text>
      {isTranslate && <TranslatedParagraph content={content} />}
    </View>
  );
};

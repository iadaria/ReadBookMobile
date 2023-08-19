import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useWord, useWordDispatch} from '../../../store/context';
import {webSpeak} from 'src/utils/web/tts';
import {TagName} from '@app-types/chapter';
import {TranslatedParagraph} from '../TranslatedParagraph';
import {styles as s} from './Paragraph.style';

// interface TagWrapperProps {
//   tagName: TagName;
//   children: any;
//   //children: JSX.Element[] | JSX.Element;
//   //children: ReactElement<any, any> | null | ReactElement<any, any>[];
// }

/* const TagWrapper: FC<TagWrapperProps> = ({tagName, children}) => {
  console.log(tagName);
  let style;
  switch (tagName) {
    case 'p':
      style = {};
  }
  return children;
}; */

interface ParagraphProps {
  content: string;
  tagName: TagName;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  content,
  tagName,
}): JSX.Element => {
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

  const tagToStyle = tagName as keyof typeof s;

  return (
    <>
      <Text style={[s.box, s[tagToStyle]]}>
        <TouchableOpacity onPress={() => webSpeak(content, voiceName)}>
          <Image style={s.play} source={require('./play.png')} />
        </TouchableOpacity>
        {Words}
        <TouchableOpacity onPress={() => toggleTranslate(!isTranslate)}>
          <Image style={s.translate} source={require('./translate.png')} />
        </TouchableOpacity>
      </Text>
      {isTranslate ? <TranslatedParagraph content={content} /> : <></>}
    </>
  );
};

import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useWord, useWordDispatch} from '../../../store/context';
import {webSpeak} from 'src/utils/web/tts';
import {Line, TagName} from '@app-types/chapter';
import {TranslatedParagraph} from '../TranslatedParagraph';
import {styles as s} from './Paragraph.style';

/* interface TagWrapperProps {
  tagName: TagName;
  children: any;
}

const TagWrapper:React.FC<TagWrapperProps> = ({tagName, children}) => {

  switch (tagName) {
    case 'li':
      return ;
  }
  return <Text>children</Text>;
}; */

export interface ParagraphProps {
  p: Line;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  p: {tagName, includes, content},
}): JSX.Element => {
  const [isTranslate, toggleTranslate] = useState(false);

  const {voiceName} = useWord();
  const dispatch = useWordDispatch();

  const onTextPress = (event: GestureResponderEvent, word: string) => {
    dispatch({type: 'set_word', word});
  };

  const tagToStyle = (tag: TagName) => tag as keyof typeof s;

  const tags = [{tagName, content}, ...includes]
    // delete '\n
    .map(tag => {
      if (['p', 'strong', 'code', 'a', 'em'].includes(tag.tagName))
        return {...tag, content: tag.content.replaceAll('\n', ' ')};
      return tag;
    })
    .filter(tag => tag.content !== '\uf0c1');

  const Words = tags.map(tag => {
    const words = tag.content.split(' ');

    return words.map((word, index) => (
      <Text
        key={`item-${index}`}
        style={s[tagToStyle(tag.tagName)]}
        onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
    ));
  });

  const wholeContent = tags.map(tag => tag.content).join();

  // Empty contents
  if (!tags.some(tag => tag.content.trim())) {
    return <></>;
  }

  return (
    <>
      <Text style={[s.box, s[tagToStyle(tagName)]]}>
        <TouchableOpacity onPress={() => webSpeak(wholeContent, voiceName)}>
          <Image style={s.play} source={require('./play.png')} />
        </TouchableOpacity>
        {Words}
        <TouchableOpacity onPress={() => toggleTranslate(!isTranslate)}>
          <Image style={s.translate} source={require('./translate.png')} />
        </TouchableOpacity>
      </Text>
      {isTranslate ? <TranslatedParagraph content={wholeContent} /> : <></>}
    </>
  );
};

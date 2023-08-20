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

export const Paragraph: React.FC<ParagraphProps> = ({p}): JSX.Element => {
  const [isTranslate, toggleTranslate] = useState(false);

  const {voiceName} = useWord();
  const dispatch = useWordDispatch();

  const onTextPress = (event: GestureResponderEvent, word: string) => {
    dispatch({type: 'set_word', word});
  };

  const tagToStyle = (tag: TagName) => tag as keyof typeof s;

  const tags = [{tagName: p.tagName, content: p.content}, ...p.includes].map(
    tag => ({...tag, content: tag.content.replaceAll('\n', ' ')}),
  );

  //console.log({tags});

  const Words = tags.map(tag => {
    const words = tag.content.split(' ');

    return words.map((word, index) => (
      <Text
        key={`item-${index}`}
        style={s[tagToStyle(tag.tagName)]}
        onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
    ));
  });

  const content = tags.map(tag => tag.content).join();
  //console.log({content});
  return (
    <>
      <Text style={[s.box, s[tagToStyle(p.tagName)]]}>
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

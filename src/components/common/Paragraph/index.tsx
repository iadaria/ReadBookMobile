import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useWordDispatch} from 'src/store/context';
import {Line, TagName} from '@app-types/chapter';
import {TranslatedParagraph} from '../TranslatedParagraph';
import {styles as s} from './Paragraph.style';
import {SpeakSignPlay} from '../SpeakSignPlay';

export interface ParagraphProps {
  p: Line;
  idx: number;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  p: {tagName, includes, content},
  idx,
}): JSX.Element => {
  const [isTranslate, toggleTranslate] = useState(false);

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

  const oneWord = Words[0].length <= 1;

  // Empty contents
  if (!tags.some(tag => tag.content.trim())) {
    return <></>;
  }

  if (oneWord) {
    return <Text style={s.box}>{Words}</Text>;
  }

  const wholeContent = tags.map(tag => tag.content).join();
  return (
    <>
      <Text style={[s.box, s[tagToStyle(tagName)]]}>
        <SpeakSignPlay text={wholeContent} idx={idx} />
        {Words}
        <TouchableOpacity onPress={() => toggleTranslate(!isTranslate)}>
          <Image style={s.translate} source={require('./translate.png')} />
        </TouchableOpacity>
      </Text>
      {isTranslate ? <TranslatedParagraph content={wholeContent} /> : <></>}
    </>
  );
};

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

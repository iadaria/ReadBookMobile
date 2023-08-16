import React from 'react';
import {Text} from 'react-native';

import {Paragraph} from '../Paragraph';
import {WordTranslate} from '../WordTranslate';
import {Line} from '../../../common/types';
import {styles as s} from './Chapter.style';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const Lines = paragraphs.map(({content}, index) => {
    return (
      <Text style={s.box} key={`item-${index}`}>
        <Paragraph content={content} />
      </Text>
    );
  });

  return (
    <>
      <WordTranslate />
      {Lines}
    </>
  );
};

import React from 'react';
import {Text} from 'react-native';

import {Paragraph} from '../Paragraph';
import {WordTranslate} from '../WordTranslate';
import {Line} from '../../../common/types';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const Lines = paragraphs.map(({content}, index) => {
    return (
      <Text key={`item-${index}`}>
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

import React from 'react';
import {Text} from 'react-native';
import {Line} from '../../common/types';
import {Paragraph} from '../Paragraph';
import {WordTranslate} from '../WordTranslate';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const Lines = paragraphs.map(({content}, index) => {
    const words = content.split(' ');
    return (
      <Text key={`item-${index}`}>
        <Paragraph words={words} />
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

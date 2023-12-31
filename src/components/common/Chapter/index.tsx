import React from 'react';
import {Paragraph} from '../Paragraph';
import {WordTranslate} from '../WordTranslate';
import {Line} from '@app-types/chapter';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const Lines = paragraphs.map(line => {
    return <Paragraph p={line} />;
  });

  return (
    <>
      <WordTranslate />
      {Lines}
    </>
  );
};

import React from 'react';
import {Paragraph} from '../Paragraph';
import {WordTranslate} from '../WordTranslate';
import {Line} from '../../../common/types';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const Lines = paragraphs.map(({content}) => {
    return <Paragraph content={content} />;
  });

  return (
    <>
      <WordTranslate />
      {Lines}
    </>
  );
};

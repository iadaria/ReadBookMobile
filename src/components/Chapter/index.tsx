import React from 'react';
import {Text} from 'react-native';
import {Line} from '../../common/types';
import {Paragraph} from '../Paragraph';
import {useWordContext} from '../../store/context';

interface ChapterProps {
  paragraphs: Line[];
}

export const Chapter: React.FC<ChapterProps> = ({paragraphs}) => {
  const {wordState} = useWordContext();

  console.log('Chapter part', wordState?.word);

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
      <Text>{wordState?.word ? wordState.word : 'nothing'}</Text>
      {Lines}
    </>
  );
};

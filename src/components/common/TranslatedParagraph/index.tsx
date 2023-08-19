import {FC, useMemo, useState} from 'react';
import {Text} from 'react-native';
import {styles as s} from './TranslatedParagraph.style';
import {translateParagraph} from 'src/requests/paragraph.request';

interface TranslatedParagraphProps {
  content: string;
}

export const TranslatedParagraph: FC<TranslatedParagraphProps> = ({
  content,
}) => {
  const [text, setText] = useState<undefined | string>('');

  useMemo(async () => {
    if (!text) {
      const tr = await translateParagraph(content);
      setText(tr);
    }
  }, [content, text]);

  if (!content) {
    return <></>;
  }

  return <Text style={s.translatedParagraph}>{text}</Text>;
};

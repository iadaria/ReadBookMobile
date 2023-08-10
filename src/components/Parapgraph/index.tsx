import {GestureResponderEvent, Text} from 'react-native';

interface ParagraphProps {
  words: string[];
}

export const Paragraph: React.FC<ParagraphProps> = ({words}): JSX.Element => {
  const onTextPress = (event: GestureResponderEvent, txt: string) => {
    console.log(event.nativeEvent.pageX);
    console.log(txt);
  };
  const Words = words.map((word, index) => (
    <Text
      key={`item-${index}`}
      onPress={event => onTextPress(event, word)}>{`${word} `}</Text>
  ));
  return <>{Words}</>;
};

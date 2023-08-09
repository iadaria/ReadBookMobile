/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  PixelRatio,
  GestureResponderEvent,
} from 'react-native';

type Line = {
  tagName: string;
  content: string;
};

const Paragraph = ({words}: {words: string[]}): JSX.Element => {
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

const Chapter = ({lines}: {lines: Line[]}) => {
  const Lines = lines.map(({content}, index) => {
    const words = content.split(' ');
    return (
      <Text key={`item-${index}`}>
        <Paragraph words={words} />
      </Text>
    );
  });

  return <>{Lines}</>;
};

function App(): JSX.Element {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const font = PixelRatio.getFontScale();

  console.log({font});

  useEffect(() => {
    getCapter().then(chapter => setChapter(chapter));
  }, []);

  const getCapter = async () => {
    const res: Response = await fetch('http://192.168.1.117:3001/chapter', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response.chapter || [];
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Chapter lines={chapter} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* 

            {chapter.map(({content}, idx) => {
            const words = content.split(' ');
            console.log(words);
            words.map(word => {
              return (
                <Text
                  style={{fontSize: 14}}
                  key={`item-${idx}`}
                  onPress={event => {
                    onTextPress(event, content);
                  }}>
                  {content}
                </Text>
              );
            });
          })}

  const onTextPress = (event: GestureResponderEvent, text: string) => {
    console.log(event.nativeEvent.pageX);
    console.log(event.nativeEvent.pageY);
    console.log(text);
    console.log(event.nativeEvent.locationX);
    console.log(event.nativeEvent.locationY);
  };

<View
  onLayout={event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    console.log({x, y, width, height});
  }}>
  {chapter.map((row, idx) => (
    <Text
      style={{fontSize: 14}}
      key={`item-${idx}`}
      onPress={event => {
        onTextPress(event, row.content);
      }}>
      {row.content}
    </Text>
  ))}
</View>; */

export default App;

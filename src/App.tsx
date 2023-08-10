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
  useColorScheme,
  View,
  PixelRatio,
} from 'react-native';
import {getChapter} from './requests/chapter';
import {Line} from './common/types';
import {Chapter} from './components/Chapter';

function App(): JSX.Element {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const font = PixelRatio.getFontScale();

  console.log({font});

  useEffect(() => {
    getChapter().then(chapter => setChapter(chapter));
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Chapter paragraphs={chapter} />
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

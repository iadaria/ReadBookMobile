import React, {useEffect, useState} from 'react';
import {
  //SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';

import {WebVoiceSelector} from 'src/components/synth';
import {getChapter} from 'src/requests/chapter.request';
import {Chapter} from 'src/components/common/Chapter';
import {Line} from '@app-types/chapter';
import {WordTranslate} from 'src/components/common/WordTranslate';
import {useDetectSpeaking} from 'src/hooks/useDetectSpeaking';
import {styles as s} from './styles';

export const MainScreen = () => {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useDetectSpeaking();

  useEffect(() => {
    getChapter().then(setChapter);
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WordTranslate />
      <ScrollView>
        <View style={s.box}>
          <WebVoiceSelector />
          <Chapter paragraphs={chapter} />
        </View>
      </ScrollView>
    </>
  );
};

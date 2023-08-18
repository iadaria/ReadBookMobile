import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {getChapter} from 'requests/chapter.request';
import {styles as s} from './styles';
import {WebVoiceSelector} from '../../components/synth';
import {Line} from 'common/types';
import {Chapter} from 'components/common/Chapter';
//import {WebVoiceSelector} from '../../components/synth';

export const MainScreen = () => {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    getChapter().then(setChapter);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={s.box}>
          <WebVoiceSelector />
          <Chapter paragraphs={chapter} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

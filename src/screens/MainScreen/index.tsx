import React, {useEffect, useState} from 'react';
import {
  //SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';

import {styles as s} from './styles';
import {WebVoiceSelector} from '../../components/synth';
import {Line} from 'src/common/types';
import {getChapter} from 'src/requests/chapter.request';
import {Chapter} from 'src/components/common/Chapter';
//import {WebVoiceSelector} from '../../components/synth';

export const MainScreen = () => {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    getChapter().then(setChapter);
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={s.box}>
          <WebVoiceSelector />
          <Chapter paragraphs={chapter} />
        </View>
      </ScrollView>
    </>
  );
};

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Line} from '../../common/types';
import {getChapter} from '../../requests/chapter';
import {Chapter} from '../../components/common/Chapter';
import {styles as s} from './styles';
import {WebVoiceSelector} from '../../components/synth';

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

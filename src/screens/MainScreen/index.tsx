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
import {Chapter} from '../../components/Chapter';
import {TtsForm} from '../../components/synth/TtsForm';

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
        <View>
          <Chapter paragraphs={chapter} />
          <TtsForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

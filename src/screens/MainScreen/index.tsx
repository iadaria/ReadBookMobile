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

export const MainScreen = () => {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

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
};

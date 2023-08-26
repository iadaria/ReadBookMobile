import React, {useEffect, useState} from 'react';
import {
  Platform,
  //SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import {WebVoiceSelector} from 'src/components/synth';
import {Chapter} from 'src/components/common/Chapter';
import {WordTranslate} from 'src/components/common/WordTranslate';
import {useDetectSpeaking} from 'src/hooks/useDetectSpeaking';
import {styles as s} from './styles';
import {Line} from 'src/@types/chapter';
import {ScreenProps} from 'src/@types/screen';
import {getChapter} from 'src/requests/chapter.request';

export function ChapterScreen({route, navigation}: ScreenProps): JSX.Element {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const id = route?.params?.id;

  if (!id) {
    throw new Error('Did not get chapter id');
  }

  useDetectSpeaking();

  useEffect(() => {
    getChapter(id).then(setChapter);
  }, [id]);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WordTranslate />
      <ScrollView>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={s.back}>{`< Back`}</Text>
          </TouchableOpacity>
        )}
        <View style={s.box}>
          {Platform.OS === 'web' && <WebVoiceSelector />}
          <Chapter paragraphs={chapter} />
        </View>
      </ScrollView>
    </>
  );
}

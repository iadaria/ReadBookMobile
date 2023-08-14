import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Line} from '../../common/types';
import {getChapter} from '../../requests/chapter';
import {Chapter} from '../../components/Chapter';
import {VoiceSelector} from '../../components/synth';
import {synth} from '../../common/synth.constant';

export const MainScreen = () => {
  const [chapter, setChapter] = useState<Line[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedVoice, setSelectedVoice] = useState<number>(0);

  useEffect(() => {
    getChapter().then(setChapter);
    //@ts-ignore
    let voices = global.window.speechSynthesis?.getVoices();
    console.log(voices);
  }, []);

  if (!synth)
    return <Text>Aw... your browser does not support Speech Synthesis</Text>;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Chapter paragraphs={chapter} />
          <VoiceSelector
            selected={selectedVoice}
            setSelected={setSelectedVoice}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

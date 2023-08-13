import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {synth} from '../../../common/synth.constant';

interface Props {
  selected?: number;
  setSelected: (selectedIndex: number) => void;
}

export function VoiceSelector({selected, setSelected}: Props) {
  //const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voices, setVoices] = useState<any[]>([]);

  const populateVoiceList = useCallback(() => {
    const newVoices = synth.getVoices();
    setVoices(newVoices);
  }, []);

  useEffect(() => {
    populateVoiceList();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoiceList;
    }
  }, [populateVoiceList]);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

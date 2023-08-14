import React, {useCallback, useEffect, useState} from 'react';
import {synth} from '../../../common/synth.constant';
import {Picker} from '@react-native-picker/picker';

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
    <Picker
      selectedValue={selected}
      onValueChange={itemValue => {
        setSelected(itemValue);
      }}>
      {voices?.map((voice, index) => (
        <Picker.Item
          label={`${voice.name} (${voice.lang} ${
            voice.default && ' [Default]'
          })`}
          value={index}
        />
      ))}
    </Picker>
  );
}

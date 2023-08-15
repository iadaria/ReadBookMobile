import React, {useCallback, useEffect, useState} from 'react';
import {synth} from '../../../common/synth.constant';
import {Picker} from '@react-native-picker/picker';
import {useWord, useWordDispatch} from '../../../store/context';
import {equal} from '../../../utils/web/tts';
import {Text} from 'react-native';

export function WebVoiceSelector() {
  const [voices, setVoices] = useState<any[]>([]);
  const {voiceName} = useWord();
  const dispatch = useWordDispatch();

  const populateVoiceList = useCallback(() => {
    //@ts-ignore
    const newVoices: any[] = synth.getVoices();
    //setVoices(newVoices);
    const filteredVoices = newVoices.filter(voice => voice.lang.includes('en'));
    setVoices(filteredVoices);
  }, []);

  useEffect(() => {
    populateVoiceList();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = populateVoiceList;
    }
  }, [populateVoiceList]);

  return (
    <>
      <Text>selected: {voiceName}</Text>
      <Picker
        selectedValue={voiceName}
        onValueChange={itemName => {
          const foundVoice = voices.find(v => equal(v.name, itemName));
          console.log(itemName, 'select and found', foundVoice?.name);
          console.log('selected voice', foundVoice);
          dispatch({type: 'set_voice', voiceName: foundVoice?.name});
        }}>
        {voices?.map((voice, index) => {
          return (
            <Picker.Item
              key={`item-${index}`}
              label={`${voice.name} (${voice.lang} ${
                voice.default && ' [Default]'
              })`}
              value={voice.name}
            />
          );
        })}
      </Picker>
    </>
  );
}

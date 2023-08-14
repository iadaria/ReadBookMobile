import {Button, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {synth} from '../../../common/synth.constant';
import {VoiceSelector} from '../VoiceSelector';
import {styles as s} from './TtsForm.styles';

export const TtsForm = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [selectedVoice, setSelectedVoice] = useState<number>(0);

  if (!synth)
    return <Text>Aw... your browser does not support Speech Synthesis</Text>;

  const speak = () => {
    //@ts-ignore
    var utterance = new SpeechSynthesisUtterance(textValue);
    utterance.voice = synth.getVoices()[selectedVoice];

    synth.speak(utterance);
  };

  return (
    <View style={s.box}>
      <TextInput
        style={[s.offset, s.border]}
        value={textValue}
        onChangeText={setTextValue}
      />
      <VoiceSelector selected={selectedVoice} setSelected={setSelectedVoice} />
      <View style={s.offset}>
        <Button title="Speak" onPress={speak} />
      </View>
    </View>
  );
};

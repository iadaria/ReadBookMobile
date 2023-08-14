import React, {FC, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const LangPicker: FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue /* , itemIndex */) =>
        setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

//const styles = StyleSheet.create({});

import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles as s} from './ContentScreen.styles';
import {getContent} from 'src/requests/content.request';
import {Content} from 'src/@types/chapter';
import {ScreenProps} from 'src/@types/screen';

export function ContentScreen({navigation: {navigate}}: ScreenProps) {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    getContent().then(setContents);
  }, []);

  console.log({contents});

  const openChapter = (id: string) => {
    console.log(id);
    navigate('Chapter', {id});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={s.box}>
          {contents.map(content => (
            <TouchableOpacity onPress={() => openChapter(content.id)}>
              <Text>{content.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

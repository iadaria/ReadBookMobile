import {Pressable, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getContent} from 'src/requests/content.request';
import {Content} from 'src/@types/chapter';
import {ScreenProps} from 'src/@types/screen';
import {styles as s} from './ContentScreen.styles';

export function ContentScreen({navigation: {navigate}}: ScreenProps) {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    getContent().then(setContents);
  }, []);

  const openChapter = (id: string) => {
    console.log(id);
    navigate('Chapter', {id});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={s.box}>
          {contents.map(({title, id}) => (
            <Pressable key={`item-${id}`} onPress={() => openChapter(id)}>
              <Text>{title || id}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

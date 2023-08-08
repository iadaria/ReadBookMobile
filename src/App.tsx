/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type Chapter = {
  tagName: string;
  content: string;
};

function App(): JSX.Element {
  const [chapter, setChapter] = useState<Chapter[]>([]);
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    getCapter().then(chapter => setChapter(chapter));
  }, []);

  const getCapter = async () => {
    const res: Response = await fetch('http://localhost:3001/chapter', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const response = await res.json();
    return response.chapter || [];
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {chapter.map(row => (
            <Text>{row.content}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

//import type {PropsWithChildren} from 'react';

/* type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
} */
/* const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}); */

export default App;

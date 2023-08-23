import 'react-native-gesture-handler';
import React from 'react';
import {WordProvider} from './store/context';
import {Navigator} from './navigator';

function App(): JSX.Element {
  return (
    <WordProvider>
      <Navigator />
    </WordProvider>
  );
}

export default App;

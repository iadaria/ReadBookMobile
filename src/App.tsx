import React from 'react';
import {MainScreen} from './screens/MainScreen';
import {WordProvider} from './store/context';

function App(): JSX.Element {
  return (
    <WordProvider>
      <MainScreen />
    </WordProvider>
  );
}

export default App;

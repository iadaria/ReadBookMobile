import {useReducer} from 'react';
import {MainScreen} from './screens/MainScreen';
import WordContext from './store/context';
import {wordReducer} from './store/book.reducer';
import {Platform} from 'react-native';

function App(): JSX.Element {
  const [wordState, wordDispatch] = useReducer(wordReducer, {word: null});

  console.log(Platform.OS);
  if (Platform.OS === 'web') {
    const dotenv = require('dotenv');
    const myEnv = dotenv.config();
    console.log({myEnv});
  }

  const providerState = {
    wordState,
    wordDispatch,
  };

  return (
    <WordContext.Provider value={providerState}>
      <MainScreen />
    </WordContext.Provider>
  );
}

export default App;

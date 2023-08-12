import {useReducer} from 'react';
import {MainScreen} from './screens/MainScreen';
import WordContext from './store/context';
import {wordReducer} from './store/book.reducer';

function App(): JSX.Element {
  const [wordState, wordDispatch] = useReducer(wordReducer, {word: null});

  console.log('NODE_ENV', process.env.NODE_ENV);

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

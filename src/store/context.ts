import React from 'react';
import {Action} from './book.reducer';

export type WordContext = {
  wordState: {word: string | null};
  wordDispatch: React.Dispatch<Action>;
};

const WordContext = React.createContext<WordContext>({
  wordState: {word: null},
  wordDispatch: () => {},
});

export function useWordContext() {
  return React.useContext(WordContext);
}

export default WordContext;

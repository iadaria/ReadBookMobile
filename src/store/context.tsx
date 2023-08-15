import React, {createContext, useContext, useReducer} from 'react';
import {Action, State, initialWord, wordReducer} from './book.reducer';

const WordContext = createContext<State>({word: null, voiceId: 0});

const WordDispatchContext = createContext<React.Dispatch<Action>>(() => {});

export function useWord() {
  return useContext(WordContext);
}

export function useWordDispatch() {
  return useContext(WordDispatchContext);
}

export function WordProvider({children}: {children: any}) {
  const [word, dispatch] = useReducer(wordReducer, initialWord);

  return (
    <WordContext.Provider value={word}>
      <WordDispatchContext.Provider value={dispatch}>
        {children}
      </WordDispatchContext.Provider>
    </WordContext.Provider>
  );
}

// export type WordContext = {
//   wordState: {word: string | null; voiceId: number};
//   wordDispatch: React.Dispatch<Action>;
// };

// const WordContext = React.createContext<WordContext>({
//   wordState: {word: null, voiceId: 0},
//   wordDispatch: () => {},
// });

// export function useWordContext() {
//   return React.useContext(WordContext);
// }

// export default WordContext;

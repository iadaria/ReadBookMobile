type State = {
  word: string | null;
};

export type Action = {
  type: string;
  word: string | null;
};

export function wordReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set_word': {
      return {
        word: action.word,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export const initialState = {word: null};

export type State = {
  word?: string | null;
  voiceName?: string;
};

export type Action = {
  type: string;
  word?: string | null;
  voiceName?: string;
};

export function wordReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set_word': {
      return {
        ...state,
        word: action.word,
      };
    }
    case 'set_voice': {
      return {
        ...state,
        voiceName: action.voiceName,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export const initialWord = {word: null};

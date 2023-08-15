export type State = {
  word?: string | null;
  voiceId?: number;
};

export type Action = {
  type: string;
  word?: string | null;
  voiceId?: number;
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
        voiceId: action.voiceId,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export const initialWord = {word: null, voiceId: 0};

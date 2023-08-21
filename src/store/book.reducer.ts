export type State = {
  word?: string | null;
  voiceName?: string;
  speak: {isSpeaking: boolean; idx: number};
};

export type Action = {
  type: string;
  word?: string | null;
  voiceName?: string;
  speak?: {isSpeaking?: boolean; idx?: number};
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
    case 'set_is_speaking': {
      return {
        ...state,
        speak: {...state.speak, ...action.speak},
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export const initialWord = {word: null, speak: {isSpeaking: false, idx: -1}};

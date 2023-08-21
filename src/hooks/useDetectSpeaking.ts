import {useEffect, useState} from 'react';
import {synth} from 'src/common/synth.constant';
import {useWord, useWordDispatch} from 'src/store/context';

export function useDetectSpeaking() {
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const {
    speak: {isSpeaking},
  } = useWord();
  const dispatch = useWordDispatch();

  useEffect(() => {
    if (isSpeaking && !timer) {
      const timeId = setInterval(() => {
        const speaking = synth.speaking;
        console.log('is speaking? ', speaking);
        if (speaking !== isSpeaking) {
          dispatch({type: 'set_is_speaking', speak: {isSpeaking: speaking}});
        }
      }, 10000);
      setTimer(timeId);
    }
    if (!isSpeaking && !!timer) {
      clearInterval(timer);
      setTimer(undefined);
    }
  }, [dispatch, isSpeaking, timer]);

  useEffect(() => {
    console.log({isSpeaking});
  }, [isSpeaking]);
}

import {Dictionary} from '../common/types';
import {requestWord} from '../requests/dictionary.request';

export async function getTranslate(text: string) {
  const dictionary = await requestWord(text);
  //console.log({dictionary});
  return getParticular(dictionary);
}

export async function getParticular(dictionary: Dictionary) {
  const {def} = dictionary;
  const translate = def.find(t => !!t.ts);
  let toShow = `${translate?.text} [${translate?.ts}]`;
  def.forEach(pos => {
    toShow += ` (${pos?.tr[0]?.pos}) ${pos?.tr[0].text}`;
    //toShow += ` (${pos?.tr[0]?.pos?.substring(0, 1)}) ${pos?.tr[0].text}`;
  });

  return toShow;
}

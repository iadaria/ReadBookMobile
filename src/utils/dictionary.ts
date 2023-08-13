import {WORD_TRANSLATE} from '../data/dictionary';

export async function getParticular() {
  const {def} = WORD_TRANSLATE;
  const translate = def.find(t => !!t.ts);
  let toShow = `time [${translate?.ts}]`;
  def.forEach(pos => {
    toShow += ` (${pos?.tr[0].pos.substring(0, 1)}) ${pos?.tr[0].text}`;
  });

  return toShow;
}

import {environment as env} from '../common/environment';
import {Dictionary} from '../common/types';

const {yandex} = env;

export async function requestWord(word: string): Promise<Dictionary> {
  const query = `key=${yandex.apiKeyDictionary}&lang=en-ru&text=${word}&flags=2&ui=en`;
  try {
    const res: Response = await fetch(`${env.dictionaryUrl}/lookup?${query}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return res.json();
  } catch (error) {
    console.log('error', {error});
  }
  return {head: {}, def: []};
}

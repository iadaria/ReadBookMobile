import {environment} from '../common/environment';
import {Dictionary} from '../common/types';

export async function requestWord(word: string): Promise<Dictionary> {
  const query = `key=${environment.yandexApiKeyDictionary}&lang=en-ru&text=${word}&flags=2&ui=en`;
  try {
    const res: Response = await fetch(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?${query}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return res.json();
  } catch (error) {
    console.log('error', {error});
  }
  return {head: {}, def: []};
}

import {environment as env} from '../common/environment';

const {yandex} = env;

type TranslatedText = {
  translations: {text: string; detectedLanguageCode: string}[];
};

export const translateParagraph = async (text: string) => {
  const body = JSON.stringify({
    sourceLanguageCode: 'en',
    targetLanguageCode: 'ru',
    texts: [text],
    folderId: yandex.folderId,
    speller: false,
  });

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Api-Key ${yandex.apiKeySaTranslate}`,
  };

  const method = 'POST';
  try {
    const res: Response = await fetch(yandex.paragraphUrl, {
      method,
      headers,
      body,
    });
    const {translations}: TranslatedText = await res.json();
    return translations[0].text;
  } catch (error) {
    console.log('error translating', error);
  }
};

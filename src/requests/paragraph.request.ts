import {environment as env} from '../common/environment';

type Result = {
  translations: {text: string; detectedLanguageCode: string}[];
};

export const translateParagraph = async (text: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  var requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({content: text}),
  };

  try {
    const res: Response = await fetch(
      `${env.baseUrl}/translate/paragraph`,
      requestOptions,
    );

    const result: Result = await res.json();
    return result.translations[0].text;
  } catch (error) {
    console.log('error translating', error);
  }
};

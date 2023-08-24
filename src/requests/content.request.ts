import {Content} from 'src/@types/chapter';
import {environment as env} from '../common/environment';

export const getContent = async (): Promise<Content[]> => {
  const res: Response = await fetch(`${env.baseUrl}/book/titles`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return res.json();
};

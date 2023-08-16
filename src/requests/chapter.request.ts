import {environment as env} from '../common/environment';

export const getChapter = async () => {
  const res: Response = await fetch(`${env.baseUrl}/chapter`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const response = await res.json();
  return response.chapter || [];
};

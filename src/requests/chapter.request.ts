import {environment as env} from '../common/environment';

export const getChapter = async (id: string) => {
  const res: Response = await fetch(`${env.baseUrl}/book/chapter/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const response = await res.json();
  return response.chapter || [];
};

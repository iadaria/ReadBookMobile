export const getChapter = async () => {
  const res: Response = await fetch('http://192.168.1.117:3001/chapter', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const response = await res.json();
  return response.chapter || [];
};

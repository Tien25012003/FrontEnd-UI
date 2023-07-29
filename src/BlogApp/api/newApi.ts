import apiClient from './client';
const getAll = async () => {
  try {
    const response = await apiClient.get('/news');
    if (response.data.success) {
      return response.data.news;
    }
  } catch (e: any) {
    console.log('Error while getting all news', e.message);
    return [];
  }
};

const getByCategory = async (category: number, qty?: number) => {
  const endpoint = qty ? `/news${category}/${qty}` : `/news/${category}`;
  try {
    const response = await apiClient.get(endpoint);
    if (response.data.success) {
      return response.data.news;
    }
  } catch (e: any) {
    console.log('Error while getting all news', e.message);
    return [];
  }
};
export {getAll, getByCategory};

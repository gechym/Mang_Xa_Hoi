import httpsResquest, { handleError } from './configService';

export const getMyPost = async ({ queryKey, pageParam = 1 }) => {
  console.log('queryKey ::::', queryKey);

  try {
    const res = await httpsResquest.get('/api/v1/posts/', {
      params: {
        limit: '30',
        page: pageParam,
        user_id: queryKey,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const getDataInfinityQuery = async ({ queryKey, pageParam = 1 }) => {
  try {
    const res = await httpsResquest.get('/api/v1/posts/', {
      params: {
        limit: '5',
        page: pageParam,
        // user_id: queryKey,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return res.data;
  } catch (error) {
    handleError(error);
  }
};

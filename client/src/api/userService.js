import httpsResquest, { handleError } from './configService';

export const searchUser = async (name) => {
  try {
    const res = await httpsResquest.get('/api/v1/users/', {
      params: {
        limit: '6',
        name: name,
      },
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem('token')}`,
      // },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

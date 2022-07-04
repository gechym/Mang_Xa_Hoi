import httpsResquest, { handleError } from './configService';

export const searchUser = async (name) => {
  try {
    const res = await httpsResquest.get('/api/v1/users/', {
      params: {
        limit: '6',
        name: name,
      },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

export const login = async (data) => {
  try {
    const res = await httpsResquest.post('/api/v1/users/login', data);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

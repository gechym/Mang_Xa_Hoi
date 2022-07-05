import httpsResquest, { handleError } from './configService';

export const searchUser = async (name) => {
  try {
    const res = await httpsResquest.get('/api/v1/users/', {
      params: {
        limit: '20',
        name: name,
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

export const register = async ({ name, email, password, passwordConfig }) => {
  try {
    const res = await httpsResquest.post('/api/v1/users/signup', {
      name,
      email,
      password,
      passwordConfig,
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

export const refreshToken = async () => {
  try {
    const res = await httpsResquest.get('/api/v1/users/refreshToken', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
      },
    });
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

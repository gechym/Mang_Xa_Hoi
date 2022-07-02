import axios from 'axios';
import httpsResquest from './configService';

export const handleError = (error) => {
  if (error.response?.data.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(error.message);
  }
};

export const searchUser = async (name) => {
  try {
    const res = await httpsResquest.get('/api/v1/users/', {
      params: {
        limit: '6',
        name: name,
      },
    });
    return res.data.data;
  } catch (error) {
    handleError(error);
  }
};

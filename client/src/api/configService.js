import { refreshToken } from './userService';

const { default: axios } = require('axios');

const httpsResquest = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 6 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function
export const handleError = (error) => {
  if (error.response?.data.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(error.message);
  }
};

httpsResquest.setTokenLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

httpsResquest.setTokenLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

httpsResquest.setRefreshTokenLocalStorage = (token) => {
  localStorage.setItem('refreshToken', token);
};

httpsResquest.removeTokenLocalStorage = () => {
  localStorage.removeItem('token');
};

httpsResquest.removeRefreshTokenLocalStorage = () => {
  localStorage.removeItem('refreshToken');
};

// xu ly data truoc khi gui len server
httpsResquest.interceptors.request.use(
  (res) => {
    console.log('↗️ Request:::: ', res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// xu ly data sau khi nhan du lieu tu server
httpsResquest.interceptors.response.use(
  async (res) => {
    console.log('↘️ Response:::: ', res);

    if (res.data.token) {
      httpsResquest.setTokenLocalStorage(res.data.token);
    }

    if (res.data.refreshToken) {
      httpsResquest.setRefreshTokenLocalStorage(res.data.refreshToken);
    }

    if (res.data.message === 'Token hết hạn vui lòng đăng nhập lại') {
      try {
        await refreshToken();
        console.log('✅ refresh token');
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return res;
  },
  (error) => {
    console.error('↘️ Response error:::: ', error.message, error.response?.data.message);
    // httpsResquest.removeTokenLocalStorage();
    return Promise.reject(error);
  },
);

export default httpsResquest;

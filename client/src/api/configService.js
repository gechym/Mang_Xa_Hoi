const { default: axios } = require('axios');

const httpsResquest = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 6 * 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZGJhby4yMGl0NkB2a3UudWRuLnZuIiwiaWF0IjoxNjU2NzU3MzY2LCJleHAiOjE2NTY4NDM3NjZ9.X54Px32rRhxS4GgOwVSZhC9nJH6NiFB5uSbvbtO0aqY',
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

httpsResquest.removeTokenLocalStorage = () => {
  localStorage.removeItem('token');
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
  (res) => {
    console.log('↘️ Response:::: ', res);
    if (res.data.token) {
      httpsResquest.setTokenLocalStorage(res.data.token);
    }

    if (res.data.message === 'Token hết hạn vui lòng đăng nhập lại') {
      console.log('✅ refresh token');
    }
    return res;
  },

  (error) => {
    httpsResquest.removeTokenLocalStorage();

    return Promise.reject(error);
  },
);

export default httpsResquest;

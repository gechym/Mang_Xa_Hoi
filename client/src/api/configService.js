const { default: axios } = require('axios');

const httpsResquest = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 6 * 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJuZ3V5ZW5kdWNiYW9AZ21haWwuY29tIiwiaWF0IjoxNjU2ODQ1MTc2LCJleHAiOjE2NTY5MzE1NzZ9.uE0Ytb0wYV9i_3mZAX73ETtxnAsvXncpCHsxUKzzR6I',
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

      return Promise.reject(new Error(res.data.message));
    }
    return res;
  },

  (error) => {
    httpsResquest.removeTokenLocalStorage();

    return Promise.reject(error);
  },
);

export default httpsResquest;

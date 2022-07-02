const { default: axios } = require('axios');

const httpsResquest = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 6 * 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZGJhby4yMGl0NkB2a3UudWRuLnZuIiwiaWF0IjoxNjU2NzMyNDc2LCJleHAiOjE2NTY4MTg4NzZ9.WutRZGNpKHwoM6bvwmRqRu9-KNMki--IxQyY6EZ2UOs',
  },
});

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

httpsResquest.interceptors.request.use(
  (res) => {
    console.log('↗️ Request:::: ', res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpsResquest.interceptors.response.use(
  (res) => {
    console.log('↘️ Response:::: ', res);
    if (res.data.token) {
      httpsResquest.setTokenLocalStorage(res.data.token);
    }
    return res;
  },

  (error) => {
    httpsResquest.removeTokenLocalStorage();
    return Promise.reject(error);
  },
);

export default httpsResquest;

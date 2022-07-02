const { default: axios } = require('axios');

const httpsResquest = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 6 * 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZGJhby4yMGl0NkB2a3UudWRuLnZuIiwiaWF0IjoxNjU2Njg3MzcyLCJleHAiOjE2NTY3NzM3NzJ9.FlQfjFDz6hmiMPpeQV19IwAAFG8YRbA0KQZZJ0EBHiQ',
  },
});

httpsResquest.interceptors.request.use(
  (res) => {
    console.log('↗️ Request:::: ', res);
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

httpsResquest.interceptors.response.use(
  (res) => {
    console.log('↘️ Response:::: ', res);
    return res;
  },

  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default httpsResquest;

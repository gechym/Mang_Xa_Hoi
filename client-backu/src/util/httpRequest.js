import axios from 'axios';

export const handleError = (error) => {
    if (error.response?.data.message) {
        throw new Error(error.response.data.message);
    } else {
        throw new Error(error.message);
    }
};

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, opt = {}) => {
    const res = await request.get(path, opt);
    return res.data;
};

export default request;

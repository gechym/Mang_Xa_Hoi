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

export const get = async (path, query = {}) => {
    const res = await request.get(path, query);
    return res.data;
};

export default request;

import axios from 'axios';

export const API = axios.create({
    baseURL: `http://localhost:4000`,
});

export const APIAuthPost = (data) => API.post('/auth', data);
export const APIAuthGet = () => API.get('/');

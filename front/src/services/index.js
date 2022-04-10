import axios from 'axios';

export const API = axios.create({
    baseURL: `https://mercado-livre-inky.vercel.app`,
});

export const APIAuthPost = (data) => API.post('/auth', data);
export const APIAuthGet = () => API.get('/');

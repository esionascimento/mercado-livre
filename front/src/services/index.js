import axios from 'axios';

export const API = axios.create({
    baseURL: `https://esionascimento-mercado-livre.herokuapp.com`,
});

export const APIAuthPost = (data) => API.post('/auth', data);
export const APIAuthGet = () => API.get('/');

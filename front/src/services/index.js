import axios from 'axios';

export const API = axios.create({
    baseURL: `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}`,
    headers: {
        'Content-type': 'application/json',
    },
});

export const APIAuthPost = (state) => API.post('/', state);
export const APIAuthGet = () => API.get('/');

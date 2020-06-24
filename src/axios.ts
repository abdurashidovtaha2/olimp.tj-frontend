import axios from 'axios';

const client = axios.create({
    baseURL: 'http://192.168.15.51',
});

export default client;

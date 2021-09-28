const axios = require('axios');
import { API_URL } from '../../constants';

export const remoteRequest = axios.create({
    baseURL: API_URL,
    timeout: 1000000,
    headers: {'Access-Control-Allow-Origin': '*'},
});
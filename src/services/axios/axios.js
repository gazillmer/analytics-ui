const axios = require('axios');
//const API_URL = `https://analytics-api-325214.rj.r.appspot.com/`
const API_URL = `http://127.0.0.1:5000`

export const APIRequest = axios.create({
    baseURL: API_URL,
    timeout: 1000000,
    headers: {'Access-Control-Allow-Origin': '*'},
});
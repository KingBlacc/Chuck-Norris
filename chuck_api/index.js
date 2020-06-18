const axios = require('axios');

module.exports = axios.create({
        baseURL: 'https://api.chucknorris.io/jokes',
        timeout: 10000
    });
//35aba5127f1864d4f4f2977afc062b54bb219bd4
//'https://api-ssl.bitly.com/v4/shorten'
import axios from 'axios';

export const key = "35aba5127f1864d4f4f2977afc062b54bb219bd4";

export const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
})


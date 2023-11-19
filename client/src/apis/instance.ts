import axios from 'axios';

// const baseURL = 'http://localhost:5010';
const baseURL = 'https://api.bearcookiestudy.site';

export const baseInstance = axios.create({ baseURL, withCredentials: true });

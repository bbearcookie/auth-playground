import axios from 'axios';

const baseURL = 'http://localhost:5010';

export const baseInstance = axios.create({ baseURL });

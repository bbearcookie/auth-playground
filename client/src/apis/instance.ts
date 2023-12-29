import axios from 'axios';

const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_PROD_BACKEND_API
  : '/api';

export const baseInstance = axios.create({ baseURL, withCredentials: true });

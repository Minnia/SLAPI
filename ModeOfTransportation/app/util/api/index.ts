import axios from 'axios';
import authRoutes from './auth.routes';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
});

const api = {
  ...authRoutes(axiosClient),
};

export default api;

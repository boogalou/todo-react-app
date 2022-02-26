import axios from 'axios';

export const API_URL = `https://todo-back-app.herokuapp.com/api`;

const apiService = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

apiService.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${ localStorage.getItem('token') }`;
  return config;
});

export { apiService }

import axios from 'axios';

const api = axios.create({
  responseType: 'json',
});

export default api;

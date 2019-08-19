import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vantum-api.herokuapp.com/'
});

export default api;

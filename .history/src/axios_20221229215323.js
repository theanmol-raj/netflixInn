import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
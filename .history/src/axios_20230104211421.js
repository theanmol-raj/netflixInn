import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    // https: config,
  });
export default instance
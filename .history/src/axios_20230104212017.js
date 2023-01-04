import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    // https: config,
  });
export default instance

// https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US
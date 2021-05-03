import axios from 'axios';

const tmdbURL = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default tmdbURL;
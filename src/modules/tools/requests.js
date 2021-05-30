const imageURL = 'https://image.tmdb.org/t/p/w500/';
const movieURL = `https://api.themoviedb.org/3/search/movie?`;
const apiKey = 'ec45fe1deaefbdd124c33f2f9a472d9e';
// const apiKey = process.env.APIKEY
// console.log(apiKey)


const requests = {
'fetchTrendingToday':`/trending/all/day?api_key=${apiKey}`,
'fetchTrendingWeekly':`/trending/all/week?api_key=${apiKey}&language=en-US&page=1`,
'fetchNetflixOriginals':`/discover/tv?api_key=${apiKey}&with_networks=213`,
'fetchTopRatedMovies':`/movie/top_rated?api_key=${apiKey}&with_networks=213`,
'fetchActionMovies':`/discover/movie?api_key=${apiKey}&with_genres=28`,
'fetchComedyMovies':`/discover/movie?api_key=${apiKey}&with_genres=35`,
'fetchHorrorMovies':`/discover/movie?api_key=${apiKey}&with_genres=27`,
'fetchRomanceMovies':`/discover/movie?api_key=${apiKey}&with_genres=10749`,
'fetchDocumentaries':`/discover/movie?api_key=${apiKey}&with_genres=99`,
'trailerKey': `api_key=${apiKey}`
};

export default requests


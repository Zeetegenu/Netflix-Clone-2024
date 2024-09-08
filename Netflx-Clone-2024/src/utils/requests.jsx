const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTreading: `/treading/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key+${API_KEY}&language=en-US`,
    fetchActionMovis: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovis: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovis: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovis: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;


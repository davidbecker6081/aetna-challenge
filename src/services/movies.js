import { CONSTANTS } from '../constants/constants';

const MoviesService = {
  getAllMovies: () => fetch(CONSTANTS.routes.allMovies)
      .then(function(response) {
        return response.json();
      })
      .catch(err => console.log({ error: err })),

  getMovieDetails: (imdbId) => fetch(CONSTANTS.routes.movieDetails(imdbId))
      .then(response => response.json())
      .catch(err => console.log({ error: err })),

  searchMovies: (searchQuery) => fetch(`http://localhost:3001/movies/search?s=${searchQuery}`)
      .then(response => response.json())
      .catch(err => console.log({ error: err }))
}

export default MoviesService;

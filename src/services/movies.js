import { CONSTANTS } from '../constants/constants';

const MoviesService = {
  getAllMovies: () => fetch(CONSTANTS.routes.allMovies)
      .then(function(response) {
        return response.json();
      }),

  getMovieDetails: (imdbId) => fetch(CONSTANTS.routes.movieDetails(imdbId))
      .then(response => response.json())
}

export default MoviesService;

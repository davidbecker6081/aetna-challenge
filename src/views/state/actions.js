import MoviesService from '../../services/movies'

export const getAllMovies = () => dispatch => {
  MoviesService.getAllMovies()
      .then(movies => {
        dispatch({
          type: 'ALL_MOVIES_LOADED',
          payload: {
            movies,
          }
        })
      })
}

export const getMovieDetails = imdbId => dispatch => {
  MoviesService.getMovieDetails(imdbId).then(details => {
    dispatch({
      type: 'MOVIE_DETAILS_LOADED',
      payload: details
    })
  })
}

export const searchMovies = searchQuery => dispatch => {
  MoviesService.searchMovies(searchQuery).then(results => {
    dispatch({
      type: 'SEARCH_RESULTS_LOADED',
      payload: {
        searchResults: results
      }
    })
  })
}

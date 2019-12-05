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
  console.log(imdbId)
  MoviesService.getMovieDetails(imdbId).then(details => {
    dispatch({
      type: 'MOVIE_DETAILS_LOADED',
      payload: details
    })
  })
}

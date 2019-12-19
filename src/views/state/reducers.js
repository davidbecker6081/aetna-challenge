const initialState = {
  movies: [],
  selectedMovie: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
      return Object.assign({}, state, { movies: action.payload.movies })
    case 'MOVIE_DETAILS_LOADED':
      return Object.assign({}, state, { selectedMovie: action.payload })
    case 'SEARCH_RESULTS_LOADED':
      return Object.assign({}, state, { searchResults: action.payload.searchResults })
    default:
    return state
  }
}

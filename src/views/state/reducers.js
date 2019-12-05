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
    default:
    return state
  }
}

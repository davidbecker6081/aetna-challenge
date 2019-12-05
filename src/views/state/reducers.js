const initialState = {
  movies: [],
  selectedMovie: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MOVIES_LOADED':
    return {
      movies: action.payload.movies,
    }
    case 'STORE_SELECTED_MOVIE':
    return {
      selectedMovie: action.payload
    }
    default:
    return state
  }
}

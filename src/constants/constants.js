export const CONSTANTS = {
  fallbackImgUrl: 'https://previews.123rf.com/images/lobo71/lobo711804/lobo71180400088/100042388-no-movie-camera-reflective-sign.jpg',
  routes: {
    allMovies: 'http://localhost:3001/movies/all',
    movieDetails: (imdbId) => `http://www.omdbapi.com/?i=${imdbId}&apikey=c32d368e`
  }
}

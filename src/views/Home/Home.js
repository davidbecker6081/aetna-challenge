import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllMovies, getMovieDetails } from '../state/actions';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  // static getDerived

  displayMovieCards(displayOption) {
    return this.props[displayOption].map(movie =>
      <MovieCard
        key={movie.id}
        id={movie.id}
        imdbId={movie.imdbId}
        title={movie.title}
        poster={movie.poster}
        getMovieDetails={this.props.getMovieDetails.bind(this, movie.imdbId)}
      />
    )
  }

  render() {
    if (this.props.movies.length === 0) {
      return <div style={{fontSize: '100px'}}>Loading....</div>
    }
    return this.props.searchResults ?
      <ul className="movie-list">
        {this.displayMovieCards('searchResults')}
      </ul>
      :
      <ul className="movie-list">
        {this.displayMovieCards('movies')}
      </ul>
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
  searchResults: state.main.searchResults
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  getMovieDetails: (imdbId) => dispatch(getMovieDetails(imdbId))
})

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imdbId: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

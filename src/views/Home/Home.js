import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllMovies } from '../state/actions';
import MovieCard from '../../components/MovieCard/MovieCard';
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies()
  }

  displayMovieCards() {
    return this.props.movies.map(movie =>
      <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
    )
  }

  render() {
    return (
      <ul className="movie-list">
        {this.displayMovieCards()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.main.movies,
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies())
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

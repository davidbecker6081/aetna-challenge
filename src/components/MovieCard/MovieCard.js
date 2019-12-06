import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import { CONSTANTS } from '../../constants/constants';
import './MovieCard.scss';

const MovieCard = ({ title, poster, id, imdbId, getMovieDetails }) => (
  <Link to={`/${id}`} alt={`Link to Movie Details for ${title}}`} onClick={() => getMovieDetails()} className="movie-card-link">
    <li className="movie-card">
      <Image src={poster} fallbackSrc={CONSTANTS.fallbackImgUrl} alt={`Movie poster for ${title}`} title={title} className="movie-card--poster"/>
      <h3 className="movie-card--title">{title}</h3>
    </li>
  </Link>
)

MovieCard.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  imdbId: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MovieCard

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import { CONSTANTS } from '../../constants/constants';
import './MovieCard.scss';

const MovieCard = ({ title, poster, id, imdbId, storeSelectedMovie }) => (
  <Link to={`/${id}`} alt={`Link to Movie Details for ${title}}`} onClick={() => storeSelectedMovie()}>
    <li className="movie-card">
      <Image src={poster} fallbackSrc={CONSTANTS.fallbackImgUrl} alt={`Movie poster for ${title}`} title={title} className="movie-card--poster"/>
      <h3 className="movie-card--title">{title}</h3>
    </li>
  </Link>
)

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  imdbId: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  storeSelectedMovie: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default MovieCard

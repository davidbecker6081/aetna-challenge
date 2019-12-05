import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import { CONSTANTS } from '../../constants/constants';
import './MovieCard.scss';

const MovieCard = ({ title, poster }) => (
  <li className="movie-card">
    <Image src={poster} fallbackSrc={CONSTANTS.fallbackImgUrl} alt={`Movie poster for ${title}`} title={title} className="movie-card--poster"/>
    <h3 className="movie-card--title">{title}</h3>
  </li>
)

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MovieCard

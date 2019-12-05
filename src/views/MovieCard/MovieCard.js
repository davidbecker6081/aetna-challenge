import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, poster }) => (
  <li className="movie-card">
    <img src={poster} alt={`Movie poster for ${title}`} className="movie-card--poster"/>
    <h3 className="movie-card--title">{title}</h3>
  </li>
)

export default MovieCard

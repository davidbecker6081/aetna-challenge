import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../../components/Image/Image';
import { CONSTANTS } from '../../constants/constants';
import './MovieDetails.scss';

class MovieDetails extends Component {
  render() {
    const { Poster, Title, imdbRating, Plot, BoxOffice, Genre, Year, Runtime } = this.props.selectedMovie;

    return (
      <section className='movie-details'>
        <article className='movie-details--poster'>
          <Image src={Poster} fallbackSrc={CONSTANTS.fallbackImgUrl} alt={`Movie poster for ${Title}`} title={Title} className="movie-details--img"/>
        </article>
        <article className='movie-details--info'>
          <div className='movie-details--info_title-rating'>
            <h2 className='movie-details--title'>{Title}</h2>
            <p className='movie-details--rating'>{`${imdbRating}/10`}</p>
          </div>
          <p className='movie-details--description'>{Plot}</p>
          <table className='movie-details--table'>
            <caption hidden>Budget, Genres, Release Year, and Runtime of movie</caption>

            <tbody>
              <tr>
                <th scope='row'>Budget</th>
                <td>{BoxOffice}</td>
              </tr>
              <tr>
                <th scope='row'>Genres</th>
                <td>{Genre}</td>
              </tr>
              <tr>
                <th scope='row'>Release Year</th>
                <td>{Year}</td>
              </tr>
              <tr>
                <th scope='row'>Runtime</th>
                <td>{Runtime}</td>
              </tr>
              </tbody>
          </table>
        </article>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.main.selectedMovie
})

MovieDetails.propTypes = {

}

export default connect(mapStateToProps)(MovieDetails)

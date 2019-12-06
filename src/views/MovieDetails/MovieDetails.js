import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../../components/Image/Image';
import MovieDetailsTable from '../../components/MovieDetailsTable/MovieDetailsTable';
import { CONSTANTS } from '../../constants/constants';
import './MovieDetails.scss';

class MovieDetails extends Component {
  render() {
    const { Poster, Title, imdbRating, Plot, BoxOffice, Genre, Year, Runtime } = this.props.selectedMovie;

    const caption = 'Budget, Genres, Release Year, and Runtime of movie'
    const tableRows = [
      { header: 'Budget', description: BoxOffice },
      { header: 'Genres', description: Genre },
      { header: 'Release Year', description: Year },
      { header: 'Runtime', description: Runtime }
    ]

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
          <MovieDetailsTable
            caption={caption}
            tableRows={tableRows}
          />
        </article>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  selectedMovie: state.main.selectedMovie
})

export default connect(mapStateToProps)(MovieDetails)

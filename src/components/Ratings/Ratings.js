import React from 'react'
import star from '../../assets/star.jpg';
import halfStar from '../../assets/half-star.png';
import emptyStar from '../../assets/empty-star.png';
var createRatingsArray = require('../../utils/createRatingsArray');
import './Ratings.scss';

const Ratings = ({ rating }) => {
  const ratingsArray = createRatingsArray(rating)
  const ratingMap = {
    1: star,
    0.5: halfStar,
    0: emptyStar
  }

  console.log(ratingsArray)

  return (
    <section className='ratings'>
      {ratingsArray.map((r, i) => <img key={i} className='rating-star' src={ratingMap[r]}/>)}
    </section>
  )
}

export default Ratings

const createRatingsArray = rating => {
  let ratings = []
  if (parseInt(rating) - rating === 0) {
    for (let i = 0; i < 10; i++) {
      if (i < parseInt(rating)) {
        ratings.push(1)
      } else {
        ratings.push(0)
      }
    }
  } else {
    for (let i = 0; i < rating - 1; i++) {
      ratings.push(1)
    }

    ratings.push(0.5)

    for (let i = 0; i < 10 - (parseInt(rating) + 1); i++) {
      ratings.push(0)
    }
  }

  return ratings
}

module.exports = createRatingsArray

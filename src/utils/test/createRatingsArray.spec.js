var createRatingsArray = require('../createRatingsArray.js');

const testRating = ({ rating, expected }) => {
  it(`should produce an array for rating of ${rating}`, () => {
    const ratingsArray = createRatingsArray(rating)
    expect(ratingsArray.length).toBe(10)
    for (let i = 0; i < 10; i++) {
      expect(ratingsArray[i]).toBe(expected[i])
    }
  });
}

describe('createRatingsArray', () => {
  testRating({ rating: 0, expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 0.3, expected: [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 0.5, expected: [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 0.8, expected: [0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 1, expected: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 1.3, expected: [1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 1.5, expected: [1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0] })
  testRating({ rating: 1.8, expected: [1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0] })  
})

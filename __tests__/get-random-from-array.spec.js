const makeGetRandomFromArray = require('../get-random-from-array')

describe('getRandomFromArray', () => {
  it('should return an empty array if no instance of Array is passed', () => {
    let getRandomFromArray

    [1, 'a', true].forEach(invalidInput => {
      getRandomFromArray = makeGetRandomFromArray(invalidInput)
      const random = getRandomFromArray()

      expect(Array.isArray(random)).toBe(true)
    })
  })

  it('should not return the same number twice in a row', () => {
    let getRandomFromArray = makeGetRandomFromArray([1, 2]);

    [...Array(8).keys()].reduce((previousValue) => {
      const random = getRandomFromArray()

      expect(random).not.toBe(previousValue)

      return random
    })
  })
})


const makeGetRandomFromArray = (array) => {
  let lastIndex
  let _getRandomFromArray = () => {
    if (!array) {
      return []
    }
    if (array.length === 1) {
      return array[0]
    }
    const currentIndex = Math.floor(Math.random() * array.length)
    if (currentIndex !== lastIndex) {
      lastIndex = currentIndex
      return array[currentIndex]
    }
    return _getRandomFromArray(array)
  }

  return _getRandomFromArray
}

module.exports = makeGetRandomFromArray;


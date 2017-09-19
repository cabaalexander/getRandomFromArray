# getRandomFromArray
This gets a random value from an array, but never gets the same value twice in a row.

```js
const makeGetRandomFromArray = require('get-random-from-array')

const arrayOfKittensImages = [
  {
    src: 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg,'
    href: 'https://twitter.com/emrgencykittens'
  },
  ...
]

// The `makeGetRandomFromArray` will return
// a closure function i.e. `_getRandomFromArray`
const getRandomKitten = makeGetRandomFromArray(arrayOfKittensImages)

// Then each time you call the closure you will get a new random value
console.log(getRandomKitten())
/*
{
  src: 'random-kitten-src.jpg',
  href: 'https://random-kitten-href.com'
}
*/
```

const regex = /mul\(\s*(-?\d+(?:\.\d+)?),*(-?\d+(?:\.\d+)?)\s*\)/

const myArray =
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))'.matchAll(
    regex
  )

console.log(myArray)

import { readInput } from '../../utils.js'

const lines = await readInput('../day1/input.txt')

function partOne() {
  const list1 = []
  const list2 = []

  lines.forEach((line) => {
    const [a, b] = line.split('   ')
    list1.push(Number(a))
    list2.push(Number(b))
  })
  list1.sort((a, b) => {
    return a - b
  })

  list2.sort((a, b) => {
    return a - b
  })

  let total = 0

  for (let i = 0; i <= list1.length - 1; i++) {
    let num1 = list1[i]
    let num2 = list2[i]
    total += Math.abs(num1 - num2)
  }
  console.log(total)
}

function partTwo() {
  const list1 = []
  const counts = new Map()

  lines.forEach((line) => {
    const [a, b] = line.split('   ')
    list1.push(Number(a))

    const value = Number(b)
    counts.set(value, (counts.get(value) || 0) + 1)
  })

  const result = list1
    .map((a) => {
      const count = counts.get(a) || 0
      return a * count
    })
    .reduce((sum, v) => sum + v, 0)
  console.log(result)
}
partOne()
partTwo()

import { readInput } from '../../utils.js'

function execute(operation) {
  const [, a, b] = operation.match(/mul\((.*)\,(.*)\)/)
  return Number(a) * Number(b)
}

async function partOne(path) {
  const lines = await readInput(path)
  const memory = lines.join('')
  return (memory.match(/mul\(\d{1,3}\,\d{1,3}\)/g) || []).reduce(
    (sum, operation) => {
      return sum + execute(operation)
    },
    0
  )
}

async function partTwo(path) {
  let enabled = true
  const lines = await readInput(path)
  const memory = lines.join('')
  return (
    memory.match(/mul\(\d{1,3}\,\d{1,3}\)|do\(\)|don\'t\(\)/g) || []
  ).reduce((sum, operation) => {
    if (operation === 'do()') {
      enabled = true
    } else if (operation === "don't()" || !enabled) {
      enabled = false
    } else if (enabled) {
      sum += execute(operation)
    }
    return sum
  }, 0)
}

console.log(await partOne('../day3/input.txt'))
console.log(await partTwo('../day3/input.txt'))

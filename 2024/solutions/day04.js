import { readInput } from '../../utils.js'

async function partOne(path) {
  const grid = await readInput(path)
  const rows = grid.length
  const cols = grid[0].length

  let count = 0

  function isAcross(startRow, startCol) {
    const row = grid[startRow]
    return row.slice(startCol).startsWith('XMAS')
  }

  function isReverse(startRow, startCol) {
    const row = grid[startRow]
    return row.slice(0, startCol + 1).endsWith('SAMX')
  }

  function isDown(startRow, col) {
    const letters = []
    for (let i = startRow; i < rows; i++) {
      letters.push(grid[i][col])
    }
    return letters.join('').startsWith('XMAS')
  }

  function isUp(startRow, startCol) {
    const letters = []
    for (let i = startRow; i >= 0; i--) {
      letters.push(grid[i][startCol])
    }
    return letters.join('').startsWith('XMAS')
  }

  function isUpRight(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row >= 0 && col < cols) {
      letters.push(grid[row][col])
      row -= 1
      col += 1
    }

    return letters.join('').startsWith('XMAS')
  }

  function isUpLeft(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row >= 0 && col >= 0) {
      letters.push(grid[row][col])
      row -= 1
      col -= 1
    }

    return letters.join('').startsWith('XMAS')
  }

  function isDownLeft(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row < rows && col >= 0) {
      letters.push(grid[row][col])
      row += 1
      col -= 1
    }

    return letters.join('').startsWith('XMAS')
  }

  function isDownRight(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row < rows && col < cols) {
      letters.push(grid[row][col])
      row += 1
      col += 1
    }

    return letters.join('').startsWith('XMAS')
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const letter = grid[row][col]
      if (letter === 'X') {
        if (isAcross(row, col)) count++
        if (isReverse(row, col)) count++
        if (isDown(row, col)) count++
        if (isUp(row, col)) count++
        if (isUpRight(row, col)) count++
        if (isUpLeft(row, col)) count++
        if (isDownLeft(row, col)) count++
        if (isDownRight(row, col)) count++
      }
    }
  }
  return count
}

async function partTwo(path) {
  const grid = await readInput(path)
  const rows = grid.length
  const cols = grid[0].length

  let count = 0

  function isUpRight(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row >= 0 && col < cols) {
      letters.push(grid[row][col])
      row -= 1
      col += 1
    }

    return letters.join('').startsWith('MAS')
  }

  function isUpLeft(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row >= 0 && col >= 0) {
      letters.push(grid[row][col])
      row -= 1
      col -= 1
    }

    return letters.join('').startsWith('MAS')
  }

  function isDownLeft(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row < rows && col >= 0) {
      letters.push(grid[row][col])
      row += 1
      col -= 1
    }

    return letters.join('').startsWith('MAS')
  }

  function isDownRight(startRow, startCol) {
    let row = startRow
    let col = startCol
    const letters = []
    while (row < rows && col < cols) {
      letters.push(grid[row][col])
      row += 1
      col += 1
    }

    return letters.join('').startsWith('MAS')
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const letter = grid[row][col]

      if (letter === 'M') {
        if (isDownRight(row, col) && isUpRight(row + 2, col)) count++
        if (isDownLeft(row, col) && isUpLeft(row + 2, col)) count++
        if (isUpLeft(row, col)) {
          if (isUpRight(row, col - 2)) {
            count++
          }
        }
        if (isDownLeft(row, col)) {
          if (isDownRight(row, col - 2)) {
            count++
          }
        }
      }
    }
  }
  return count
}

console.log(await partTwo('../day4/input.txt'))
// console.log(await partTwo('../day4/sample.txt'))

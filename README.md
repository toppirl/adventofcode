# Advent of Code 2024

## Table of Contents

- [Day 1 - Historian Hysteria][d01]
- [Day 2 - Red-Nosed Reports][d02]
- [Day 3 - Mull It Over][d03]
- [Day 4 - Ceres Search][d04]
<!--
- [Day 5 - xxx][d05]
- [Day 6 - xxx][d06]
- [Day 7 - xxx][d07]
- [Day 8 - xxx][d08]
- [Day 9 - xxx][d09]
- [Day 10 - xxx][d10]
- [Day 11 - xxx][d11]
- [Day 12 - xxx][d12]
- [Day 13 - xxx][d13]
- [Day 14 - xxx][d14]
- [Day 15 - xxx][d15]
- [Day 16 - xxx][d16]
- [Day 17 - xxx][d17]
- [Day 18 - xxx][d18]
- [Day 19 - xxx][d19]
- [Day 20 - xxx][d20]
- [Day 21 - xxx][d20]
- [Day 22 - xxx][d20]
- [Day 23 - xxx][d20]
- [Day 24 - xxx][d20]
- [Day 25 - xxx][d20]
  -->

## Day 1 - Historian Hysteria

[Problem][d01-problem] — [Solution][d01-solution] — [Input][d01-input]

### Part 1

```javascript
let sortedList1 = list1.sort((a, b) => {
  return a - b
})

let sortedList2 = list2.sort((a, b) => {
  return a - b
})

let total = 0

for (let i = 0; i <= list1.length - 1; i++) {
  let num1 = sortedList1[i]
  let num2 = sortedList2[i]
  total += Math.abs(num1 - num2)
}
```

### Part 2

```javascript
for (let i = 0; i <= list1.length - 1; i++) {
  let last = sortedList2.lastIndexOf(sortedList1[i])

  let first = sortedList2.indexOf(sortedList1[i])

  if (last === -1 || first === -1) {
    total += 0
  } else {
    total += (last - first + 1) * list1[i]
  }
}
```

## Day 2 - Red-Nosed Reports

[Problem][d02-problem] — [Solution][d02-solution] — [Input][d02-input] - [Back to top][top]

### Part 1

```javascript
const checkSafetyScore = (report) => {
  let increasing
  for (let i = 1; i < report.length; i++) {
    let score
    let previousLevel = report[i - 1]
    let currentLevel = report[i]

    score = currentLevel - previousLevel

    if (score < -3 || score > 3 || score === 0) return false
    if (increasing === true && score < 0) return false
    if (increasing === false && score > 0) return false
    if (score < 0) {
      increasing = false
    } else {
      increasing = true
    }
  }
  return true
}

fs.readFile(filePath, 'utf8', (err, data) => {
  const lines = data.split('\n')
  let safeReportScore = 0
  lines.forEach((line, index) => {
    const report = line.split(' ').map(Number)
    if (checkSafetyScore(report)) {
      safeReportScore += 1
    }
  })
  return safeReportScore
})
```

### Part 2

```javascript
else {
      for (let i = 0; i < report.length; i++) {
        let reportCopy = report.slice()
        reportCopy.splice(i, 1)
        if (checkSafetyScore(reportCopy)) {
          return (safeReportScore += 1)
        }
      }
    }
```

## Day 3 - Mull It Over

[Problem][d03-problem] — [Complete solution][d03-solution] — [Input][d03-input] - [Back to top][top]

### Part 1

```javascript
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
```

### Part 2

```javascript
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
```

## Day 4 - Ceres Search

[Problem][d04-problem] — [Complete solution][d04-solution] — [Input][d04-input] - [Back to top][top]

### Part 1

```javascript
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
```

### Part 2

```javascript
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
```

---

[top]: #advent-of-code-2024
[d01]: #day-1---historian-hysteria
[d02]: #day-2---red-nosed-reports
[d03]: #day-3---mull-it-over
[d04]: #day-4---ceres-search

<!-- [d05]: #day-5---
[d06]: #day-6---
[d07]: #day-7---
[d08]: #day-8---
[d09]: #day-9---
[d10]: #day-10---
[d11]: #day-11---
[d12]: #day-12---
[d13]: #day-13---
[d14]: #day-14---
[d15]: #day-15---
[d16]: #day-16---
[d17]: #day-17---
[d18]: #day-18---
[d19]: #day-19---
[d20]: #day-20---
[d21]: #day-21---
[d22]: #day-22---
[d24]: #day-24---
[d25]: #day-25--- -->

[d01-problem]: https://adventofcode.com/2024/day/1
[d02-problem]: https://adventofcode.com/2024/day/2
[d03-problem]: https://adventofcode.com/2024/day/3
[d04-problem]: https://adventofcode.com/2024/day/4

<!-- [d05-problem]: https://adventofcode.com/2024/day/5
[d06-problem]: https://adventofcode.com/2024/day/6
[d07-problem]: https://adventofcode.com/2024/day/7
[d08-problem]: https://adventofcode.com/2024/day/8
[d09-problem]: https://adventofcode.com/2024/day/9
[d10-problem]: https://adventofcode.com/2024/day/10
[d11-problem]: https://adventofcode.com/2024/day/11
[d12-problem]: https://adventofcode.com/2024/day/12
[d13-problem]: https://adventofcode.com/2024/day/13
[d14-problem]: https://adventofcode.com/2024/day/14
[d15-problem]: https://adventofcode.com/2024/day/15
[d16-problem]: https://adventofcode.com/2024/day/16
[d17-problem]: https://adventofcode.com/2024/day/17
[d18-problem]: https://adventofcode.com/2024/day/18
[d19-problem]: https://adventofcode.com/2024/day/19
[d20-problem]: https://adventofcode.com/2024/day/20
[d21-problem]: https://adventofcode.com/2024/day/21
[d22-problem]: https://adventofcode.com/2024/day/22
[d24-problem]: https://adventofcode.com/2024/day/24
[d25-problem]: https://adventofcode.com/2024/day/25 -->

[d01-solution]: 2024/solutions/day01.js
[d02-solution]: 2024/solutions/day02.js
[d03-solution]: 2024/solutions/day03.js
[d04-solution]: 2024/solutions/day04.js

<!-- [d05-solution]: solutions/day05.js
[d06-solution]: solutions/day06.js
[d07-solution]: solutions/day07.js
[d08-solution]: solutions/day08.js
[d09-solution]: solutions/day09.js
[d10-solution]: solutions/day10.js
[d11-solution]: solutions/day11.js
[d12-solution]: solutions/day12.js
[d13-solution]: solutions/day13.js
[d14-solution]: solutions/day14.js
[d15-solution]: solutions/day15.js
[d16-solution]: solutions/day16.js
[d17-solution]: solutions/day17.js
[d18-solution]: solutions/day18.js
[d19-solution]: solutions/day19.js
[d20-solution]: solutions/day20.js
[d21-solution]: solutions/day21.js
[d22-solution]: solutions/day22.js
[d24-solution]: solutions/day24.js
[d25-solution]: solutions/day25.js -->

[d01-input]: 2024/day1/input.txt
[d02-input]: 2024/day2/input.txt
[d03-input]: 2024/day3/input.txt
[d04-input]: 2024/day4/input.txt

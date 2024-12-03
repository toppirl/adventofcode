# Advent of Code 2024

## Table of Contents

- [Day 1 - Historian Hysteria][d01]
- [Day 2 - Red-Nosed Reports][d02]
- [Day 3 - Mull It Over][d03]
<!--
- [Day 4 - xxx][d04]
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

### Part 2

---

[top]: #advent-of-code-2024
[d01]: #day-1---historian-hysteria
[d02]: #day-2---red-nosed-reports
[d03]: #day-3---mull-it-over
[d04]: #day-4---
[d05]: #day-5---
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
[d25]: #day-25---
[d01-problem]: https://adventofcode.com/2024/day/1
[d02-problem]: https://adventofcode.com/2024/day/2
[d03-problem]: https://adventofcode.com/2024/day/3
[d04-problem]: https://adventofcode.com/2024/day/4
[d05-problem]: https://adventofcode.com/2024/day/5
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
[d25-problem]: https://adventofcode.com/2024/day/25
[d01-solution]: solutions/day01.js
[d02-solution]: solutions/day02.js
[d03-solution]: solutions/day03.js
[d04-solution]: solutions/day04.js
[d05-solution]: solutions/day05.js
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
[d25-solution]: solutions/day25.js
[d01-input]: day1/input.txt
[d02-input]: day2/input.txt
[d03-input]: day3/input.txt

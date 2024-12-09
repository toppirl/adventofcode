import { readInput } from '../../utils.js'

const lines = await readInput('../day2/input.txt')

// Read the file asynchronously

let safeReportScore = 0
lines.forEach((line, index) => {
  const report = line.split(' ').map(Number)
  if (checkSafetyScore(report)) {
    safeReportScore += 1
  } else {
    for (let i = 0; i < report.length; i++) {
      let reportCopy = report.slice()
      reportCopy.splice(i, 1)
      if (checkSafetyScore(reportCopy)) {
        return (safeReportScore += 1)
      }
    }
  }
})
console.log(safeReportScore)

function checkSafetyScore(report) {
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

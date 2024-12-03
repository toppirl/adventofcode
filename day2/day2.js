const fs = require('fs')
const path = require('path')

// Construct the path to the text file in the same directory
const filePath = path.join(__dirname, 'input.txt')

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  const lines = data.split('\n')
  let safeReportScore = 0
  lines.forEach((line, index) => {
    const report = line.split(' ').map(Number)
    if (checkSafetyScore(report)) safeReportScore += 1
  })
  console.log(safeReportScore)
})

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

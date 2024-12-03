const fs = require('fs')
const path = require('path')

// Construct the path to the text file in the same directory
const filePath = path.join(__dirname, 'input.txt')

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }
  const lines = data.split('\n')
  let safeCount = 0
  let notSafeCount = 0
  lines.forEach((line, index) => {
    let safe = true
    let up = false
    let down = false
    const nums = line.split(' ').map(Number)
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
        safe = false
        break
      }
      if (nums[i] > nums[i + 1]) {
        down = true

        if (
          Math.abs(nums[i] - nums[i + 1]) < 1 ||
          Math.abs(nums[i] - nums[i + 1]) > 3
        ) {
          safe = false
        }
      }
      if (nums[i] < nums[i + 1]) {
        // console.log(nums[i] < nums[i + 1])
        up = true
        if (
          Math.abs(nums[i + 1] - nums[i]) < 1 ||
          Math.abs(nums[i + 1] - nums[i]) > 3
        ) {
          safe = false
        }
        // console.log(safe)
      }

      if (up && down) {
        safe = false
      }
    }
    if (safe) safeCount++
    if (!safe) notSafeCount++

    console.log(`${nums} is marked as safe ${safe}`)
  })
  console.log(safeCount)
  console.log(notSafeCount)
  console.log(safeCount + notSafeCount)
})

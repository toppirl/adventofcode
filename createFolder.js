// createFolder.js

const fs = require('fs').promises
const path = require('path')

// Function to validate folder name
function isValidFolderName(name) {
  // Common invalid characters across Windows, macOS, and Linux
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g
  return !invalidChars.test(name)
}

// Function to validate year
function isValidYear(year) {
  const currentYear = new Date().getFullYear()
  const yearNumber = Number(year)
  return (
    !isNaN(yearNumber) &&
    Number.isInteger(yearNumber) &&
    yearNumber >= 1900 &&
    yearNumber <= currentYear + 10 // Allowing up to 10 years in the future
  )
}

// Function to check if folder exists
async function folderExists(folderPath) {
  try {
    await fs.access(folderPath)
    return true
  } catch {
    return false
  }
}

// Function to create folder
async function createFolder(folderPath, folderName, year) {
  await fs.mkdir(folderPath, { recursive: true })
  console.log(`Folder "${folderName}" created successfully in year "${year}".`)
}

// Function to create files with optional content
async function createFiles(folderPath, files, fileContents = {}) {
  for (const file of files) {
    const filePath = path.join(folderPath, file)
    const content = fileContents[file] || ''
    try {
      await fs.writeFile(filePath, content)
      console.log(
        `File "${file}" created successfully${
          content ? ' with default content' : ''
        }.`
      )
    } catch (err) {
      console.error(`Error creating file "${file}":`, err)
    }
  }
}

// Function to get the current year
function getCurrentYear() {
  return new Date().getFullYear()
}

// Main function
async function main() {
  // Retrieve arguments
  const args = process.argv.slice(2)
  const folderName = args[0]
  let year = args[1]

  // Validate folder name
  if (!folderName) {
    console.error('Usage: npm run create -- <FolderName> [Year]')
    process.exit(1)
  }

  if (!isValidFolderName(folderName)) {
    console.error(
      'Invalid folder name provided. Please avoid using characters like < > : " / \\ | ? *'
    )
    process.exit(1)
  }

  // If year is not provided, use the current year
  if (!year) {
    year = getCurrentYear().toString()
    console.log(`No year provided. Defaulting to current year: "${year}".`)
  }

  // Validate year
  if (!isValidYear(year)) {
    console.error(
      `Invalid year provided: "${year}". Please enter a valid year between 1900 and ${
        getCurrentYear() + 10
      }.`
    )
    process.exit(1)
  }

  // Define the path for the new folder within the specified year
  const yearPath = path.join(__dirname, year)
  const folderPath = path.join(yearPath, folderName)
  const files = ['answer.txt', 'input.txt', 'puzzle.txt']
  const fileContents = {
    'answer.txt': 'Your answer goes here...',
    'input.txt': 'Your input goes here...',
    'puzzle.txt': 'Your puzzle goes here...',
  }

  // Check if the year directory exists; if not, create it
  const yearExists = await folderExists(yearPath)
  if (!yearExists) {
    try {
      await fs.mkdir(yearPath, { recursive: true })
      console.log(`Year directory "${year}" created successfully.`)
    } catch (err) {
      console.error(`Error creating year directory "${year}":`, err)
      process.exit(1)
    }
  }

  // Check if the target folder already exists
  const exists = await folderExists(folderPath)
  if (exists) {
    console.error(`Folder "${folderName}" already exists in year "${year}".`)
    process.exit(1)
  }

  try {
    // Create the target folder within the year directory
    await createFolder(folderPath, folderName, year)

    // Create the files inside the target folder with default content
    await createFiles(folderPath, files, fileContents)

    console.log('All files created successfully.')
  } catch (err) {
    console.error('Error during folder or file creation:', err)
    process.exit(1)
  }
}

// Invoke the main function
main()

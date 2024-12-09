import { promises as fs } from 'node:fs'

export const readInput = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8')
    const lines = data.trim().split('\n')
    return lines
  } catch (error) {
    console.error(`Error reading file from path ${path}:`, error)
    throw error // Re-throw the error after logging it
  }
}

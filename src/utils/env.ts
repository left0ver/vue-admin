import dotenv, { DotenvParseOutput } from 'dotenv'
import path from 'path'

function getEnv(filename: string): DotenvParseOutput | undefined {
  const envPath = path.resolve(process.cwd(), filename)
  return dotenv.config({ path: envPath }).parsed
}
export const baseEnv = getEnv('.env')
export const devEnv = getEnv('.development.env')
export const prodEnv = getEnv('.production.env')

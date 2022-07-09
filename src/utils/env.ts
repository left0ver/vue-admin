/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import dotenv, { DotenvParseOutput } from 'dotenv'
import path from 'path'

interface DevEnv extends DotenvParseOutput {
  BASE_URL: string
}
interface ProdEnv extends DotenvParseOutput {
  BASE_URL: string
}

function getEnv(filename: '.env'): DotenvParseOutput
function getEnv(filename: '.development.env'): DevEnv
function getEnv(filename: '.production.env'): ProdEnv
function getEnv(
  filename: '.env' | '.development.env' | '.production.env',
): DotenvParseOutput | undefined | DevEnv | ProdEnv {
  const envPath = path.resolve(process.cwd(), filename)
  return dotenv.config({ path: envPath }).parsed
}

const baseEnv = getEnv('.env')
export const devEnv: DevEnv = { ...baseEnv, ...getEnv('.development.env') }
export const prodEnv: ProdEnv = { ...baseEnv, ...getEnv('.production.env') }

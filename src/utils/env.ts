import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

const baseEnvPath = path.resolve(process.cwd(), '.env')
const devEnvPath = path.resolve(process.cwd(), '.development.env')
const prodEnvPath = path.resolve(process.cwd(), '.production.env')
function split(envs: string) {
  const envArr = envs.split('\n').slice(0, -1)
  const res: Record<string, string> = {}
  for (const env of envArr) {
    const singleEnv = env.split('=')
    const [key, value] = singleEnv
    if (value !== undefined) res[key] = value
  }
  return res
}
function getEnv(envPath: string) {
  dotenv.config({ path: envPath })
  const envConfig = fs.readFileSync(envPath).toString()
  return split(envConfig)
}
export const baseEnv = getEnv(baseEnvPath)
export const devEnv = getEnv(devEnvPath)
export const prodEnv = getEnv(prodEnvPath)

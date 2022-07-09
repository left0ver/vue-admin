import axios from 'axios'
import isDev from '@/utils/isDev'
import { devEnv, prodEnv } from './env'

const request = axios.create({
  baseURL: isDev ? devEnv.BASE_URL : prodEnv.BASE_URL,
  timeout: 5000,
})
export default request

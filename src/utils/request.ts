import axios from 'axios'

const service = axios.create({
  // 你自己开发的时候可以设置baseUrl
  // baseURL: process.env.BASE_URL,
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  },
)

service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    console.log(error)
  },
)
export default service

import Cookies from 'js-cookie'
import { accessTokenKey, refreshTokenKey } from '@/settings'

// accessToken
export function getAccessToken(): string {
  const accessToken = Cookies.get(accessTokenKey)
  // 没有token则返回空字符串
  if (accessToken === undefined) return ''
  return accessToken
}
export function setAccessToken(accessToken: string) {
  // see docs https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#expire-cookies-in-less-than-a-day
  // accessToken的存活时间是2h
  Cookies.set(accessTokenKey, accessToken, { expires: 1 / 12 })
}
export function removeAccessToken() {
  Cookies.remove(accessTokenKey)
}
// refreshToken
export function getRefreshToken(): string {
  const refreshToken = Cookies.get(refreshTokenKey)
  if (refreshToken === undefined) return ''
  return refreshToken
}
export function setRefreshToken(refreshToken: string) {
  // refreshToken的存活时间2天
  Cookies.set(refreshTokenKey, refreshToken, { expires: 2 })
}
export function removeRefreshToken() {
  Cookies.remove(refreshTokenKey)
}

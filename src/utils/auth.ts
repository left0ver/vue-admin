import Cookies from 'js-cookie'
import { accessTokenKey, refreshTokenKey } from '@/settings'

// accessToken
export function getAccessToken(): string {
  const accessToken = Cookies.get(accessTokenKey)
  if (accessToken === undefined) return ''
  return accessToken
}
export function setAccessToken(accessToken: string) {
  Cookies.set(accessTokenKey, accessToken)
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
  Cookies.set(refreshTokenKey, refreshToken)
}
export function removeRefreshToken() {
  Cookies.remove(refreshTokenKey)
}

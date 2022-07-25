import { removeRefreshToken, removeAccessToken } from '@/utils/auth'

export function reset(): void {
  removeAccessToken()
  removeRefreshToken()
  // 清除pinia存在sessionStorage中的数据
  sessionStorage.clear()
}

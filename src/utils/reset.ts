import type { StoreDefinition } from 'pinia'
import { removeRefreshToken, removeAccessToken } from '@/utils/auth'
import * as rootStore from '@/store'

type StoreKeys = keyof typeof rootStore
export function reset(): void {
  removeAccessToken()
  removeRefreshToken()
  // 清除pinia存在sessionStorage中的数据
  sessionStorage.clear()
  const storeKeys = Object.keys(rootStore) as StoreKeys[]
  // 清除pinia中的数据
  storeKeys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(rootStore, key)) {
      const useStore = rootStore[key] as StoreDefinition
      const store = useStore()
      store.$reset()
    }
  })
}

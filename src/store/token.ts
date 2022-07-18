import { defineStore } from 'pinia'
import type { Token } from './type'

export const useTokenStore = defineStore<'token', Token>('token', {
  state: () => ({
    access_token: '',
    refresh_token: '',
  }),
  actions: {
    updateAccessToken(newAccessToken: string) {
      this.access_token = newAccessToken
    },
    updateRefreshToken(newRefreshToken: string) {
      this.refresh_token = newRefreshToken
    },
    resetToken() {
      this.$reset()
    },
  },
})

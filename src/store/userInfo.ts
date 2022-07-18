import { defineStore } from 'pinia'
import { User } from './type'

export const useUserInfoStore = defineStore<'userInfo', User>('userInfo', {
  persist: {
    enabled: true,
  },
  state: () => ({
    id: -1,
    username: '',
    phone: '',
    name: '',
    roles: [],
  }),
  getters: {},
  actions: {
    updateRoles(newRoles: string[]) {
      this.roles = newRoles
    },
  },
})

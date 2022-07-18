import { defineStore } from 'pinia'
import { User } from './type'

export const useUserInfoStore = defineStore<'userInfo', User>('userInfo', {
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

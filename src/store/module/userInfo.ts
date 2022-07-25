import { defineStore } from 'pinia'
import { User } from '../type'
import { Roles } from '@/type'

export const useUserInfoStore = defineStore('userInfo', {
  persist: {
    enabled: true,
  },
  state: (): User => ({
    id: -1,
    username: '',
    phone: '',
    name: '',
    roles: [],
  }),
  getters: {},
  actions: {
    updateRoles(newRoles: Roles[]) {
      this.roles = newRoles
    },
  },
})

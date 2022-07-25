import { Roles } from '@/type'

export interface User {
  id: number
  username: string
  phone: string
  name: string
  roles: Roles[]
}

export interface Token {
  access_token: string
  refresh_token: string
  sessionTimeout: boolean
}

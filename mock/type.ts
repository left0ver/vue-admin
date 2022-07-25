/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum Roles {
  ADMIN = 'admin',
  LEFTOVER = 'leftover',
  TEACHER = 'teacher',
}
export interface IUser {
  id: number
  username: string
  phone: string
  name: string
  roles: Roles[]
}

export interface Token {
  id: number
  access_token: string
  refresh_token: string
}

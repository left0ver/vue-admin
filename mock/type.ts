export interface IUser {
  id: number
  username: string
  phone: string
  name: string
  roles: string[]
}

export interface Token {
  id: number
  access_token: string
  refresh_token: string
}

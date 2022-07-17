export interface User {
  id: number
  username: string
  phone: string
  name: string
  roles: string[]
}

export interface Token {
  access_token: string
  refresh_token: string
}

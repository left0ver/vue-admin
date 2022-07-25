import Mock from 'mockjs'
import type { IUser } from '../type'
import { Roles } from '../type'

export const users: IUser[] = Mock.mock([
  {
    id: 1,
    username: 'leftover',
    phone: '12345678901',
    name: '@first',
    roles: [Roles.LEFTOVER],
  },
  {
    id: 2,
    username: 'admin',
    phone: '12345678901',
    name: '@first',
    roles: [Roles.ADMIN],
  },
  {
    id: 3,
    username: 'teacher',
    phone: '12345678901',
    name: '@first',
    roles: [Roles.TEACHER],
  },
])

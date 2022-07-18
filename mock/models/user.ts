import Mock from 'mockjs'
import type { IUser } from '../type'

export const users: IUser[] = Mock.mock([
  {
    id: 1,
    username: 'leftover',
    phone: '12345678901',
    name: '@first',
    roles: ['test'],
  },
  {
    id: 2,
    username: 'admin',
    phone: '12345678901',
    name: '@first',
    roles: ['admin'],
  },
  {
    id: 3,
    username: 'teacher',
    phone: '12345678901',
    name: '@first',
    roles: ['teacher'],
  },
])

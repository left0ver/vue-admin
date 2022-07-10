import Mock from 'mockjs'

export const userInfo = Mock.mock([
  {
    id: 1,
    username: 'leftover',
    name: '@first',
    roles: ['test'],
  },
  {
    id: 2,
    username: 'admin',
    name: '@first',
    roles: ['admin'],
  },
  {
    id: 3,
    username: 'teacher',
    name: '@first',
    roles: ['teacher'],
  },
])

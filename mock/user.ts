import Mock from 'mockjs'

export const userInfo = Mock.mock([
  {
    id: 1,
    username: 'leftover',
    name: '@first',
    role: ['test'],
  },
  {
    id: 2,
    username: 'admin',
    name: '@first',
    role: ['admin'],
  },
  {
    id: 3,
    username: 'teacher',
    name: '@first',
    role: ['teacher'],
  },
])

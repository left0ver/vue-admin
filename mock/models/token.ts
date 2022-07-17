import Mock from 'mockjs'
import type { Token } from '../type'

export const tokens: Token[] = Mock.mock([
  {
    id: 1,
    access_token: 'fakeAccessToken1',
    refresh_token: 'fakeRefreshToken1',
  },
  {
    id: 2,
    access_token: 'fakeAccessToken2',
    refresh_token: 'fakeRefreshToken2',
  },
  {
    id: 3,
    access_token: 'fakeAccessToken3',
    refresh_token: 'fakeRefreshToken3',
  },
])

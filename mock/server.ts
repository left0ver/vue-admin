import { Middleware } from 'webpack-dev-server'
import type Server from 'webpack-dev-server'
import { userInfo } from './user'

export default function (
  middlewares: Middleware[],
  devServer: Server,
): Middleware[] {
  if (!devServer || !devServer.app) {
    throw new Error('webpack-dev-server is not defined')
  }
  devServer.app.get('/vue-admin/login', (req, res) => {
    res.json(userInfo)
  })
  return middlewares
}

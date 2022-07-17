import express from 'express'
import { users } from '../models/user'
import { tokens } from '../models/token'
import { authKey } from '../../src/settings'

const userRouter = express.Router()

userRouter.get('/userInfo', (req, res) => {
  const token = req.headers[authKey]
  if (token !== undefined) {
    const index = tokens.findIndex(item => item.access_token === token)
    if (index !== -1) {
      // token正确，有这个人
      const { id } = tokens[index]
      const user = users.find(rowUser => rowUser.id === id)
      res.json({ code: 1, data: { ...user } })
    } else {
      res.status(401).json({ code: 0, errMsg: 'token错误' })
    }
  }
})

export default userRouter

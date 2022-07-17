import express from 'express'
import { users } from '../models/user'
import { tokens } from '../models/token'

const loginRouter = express.Router()

loginRouter.post('/login', express.json(), (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  let id: undefined | number
  const userIsLegal = users.some(user => {
    // 这些测试账户的密码都是123456
    if (user.username === username && password === '123456') {
      id = user.id
    }
    return id !== undefined
  })
  if (userIsLegal) {
    const index = tokens.findIndex(token => token.id === id)
    const { access_token, refresh_token } = tokens[index]
    res.json({ code: 1, data: { access_token, refresh_token } })
  } else {
    res.json({ code: 0, errMsg: 'Invalid username or password' })
  }
})

export default loginRouter

import express from 'express'
import cors from 'cors'

import loginRouter from './routes/login'
import userRouter from './routes/user'

const port = 8000
const app = express()
app.use(cors())

app.use('/vue-admin', loginRouter)
app.use('/vue-admin', userRouter)
// app.get('/vue-admin/login', (req, res) => {
//   res.send('hh')
// })

app.listen(port, '127.0.0.1', () => {
  console.log(`server listening on port ${port}`)
})

export default app

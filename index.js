import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import exjwt from 'express-jwt'
import { find  } from 'lodash'

const PORT = 8080
const sekret = 't3h 53kr3t 54uz3!!!111'
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const jwtMiddleware = exjwt({
  secret: sekret,
})

const users = [
  { id: 0, username: 'admin', password: 'admin' },
  { id: 1, username: 'jesse', password: 'passy' },
]

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const authUser = find(users, {'username': username, 'password': password})

  if(authUser){
    const token = jwt.sign(
      { id: authUser.id, username: authUser.name},
      sekret,
      { expiresIn: 129600 }
    )
    res.json({
      success: true,
      err: null,
      token,
    })
  }
  else {
    res.status(401).json({
      sucess: false,
      err: 'No user found matching those credentials',
      token: null,
    })
  }
})

app.get('/', jwtMiddleware, (req, res) => {
  res.send('You are authenticated!');
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError'){
    res.status(401).send(err)
  }
  else {
    next(err);
  }
})

app.listen(PORT, () => {
  console.log(`Simple JWT Auth Server running on port ${PORT}`)
})

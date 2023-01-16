const express = require('express')
const router = express.Router()
const {register,login, refreshToken,profile} = require('../controller/users')
const {protect} = require('../middleware/auth')


router
.post('/register',register)
.post('/login',login)
.post('/refresh-token',refreshToken)
.get('/profile',protect,profile)


module.exports = router
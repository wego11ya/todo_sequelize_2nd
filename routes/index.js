const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')  // 掛載 middleware

// 引入模組程式碼
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')
const auth = require('./modules/auth')

// 引入路由模組，將網址結構導向符合/字串的request導向對應的模組
router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router






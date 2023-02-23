const express = require('express')
const router = express.Router()

// 引入模組程式碼
const home = require('./modules/home')
const users = require('./modules/users')

// 引入路由模組，將網址結構導向符合/字串的request導向對應的模組
router.use('/users', users)
router.use('/', home)

module.exports = router






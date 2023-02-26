const express = require('express')
const router = express.Router()
const { Todo } = require("../../models");
const { User } = require("../../models");

router.get('/', (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if(!user) throw new Error('user not found')

      return Todo.findAll({
        raw: true,
        nest: true,
        where: { UserId: req.user.id}
      })
    })
    .then((todos) => {
      res.render('index', {todos})
    })
    .catch(err => console.log(err))
})

module.exports = router
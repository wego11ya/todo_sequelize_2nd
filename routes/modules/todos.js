const express = require('express')
const router = express.Router()
const { Todo } = require("../../models");

router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then((todo) => {
      console.log(todo)
      res.render('detail', { todo: todo.toJSON() })})
    .catch(error => console.log(error))
})

module.exports = router
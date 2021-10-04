const express = require('express')
const Router = express.Router()
const createTodosCon = require('../controller/todos')

Router.post('/createTodos', createTodosCon.createTodos)


module.exports = Router
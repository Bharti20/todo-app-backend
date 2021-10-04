const express = require('express')
const Router = express.Router()
const createTodosCon = require('../controller/todos')
const auth = require('../middleware/auth')

Router.post('/createTodos', createTodosCon.createTodos)
Router.get('/getMyTodos',auth, createTodosCon.getMyTodos)

module.exports = Router


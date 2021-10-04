const express = require('express')
const Router = express.Router()
const getUserControler = require('../controller/getUser')

Router.get('/user/getAll', getUserControler)

module.exports = Router
const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')

const getUserControler = require('../controller/getUser')


Router.get('/user/ageMoreThan/:age',auth, getUserControler.getAgeMoreThan)
Router.get('/user/ageLessThan/:age', auth, getUserControler.getAgeLessThan)
Router.get('/user/:id',auth, getUserControler.getByUserId)

module.exports = Router
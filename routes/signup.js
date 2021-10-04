const express = require('express')
const Router = express.Router()
const signupController = require('../controller/signup')

Router.post('/user/signup', signupController.signUp)

module.exports = Router
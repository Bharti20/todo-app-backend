const express = require('express')
const Router = express.Router()

const postCityRoute = require('./postCities')
const signupRoute = require('./signup')
const loginRoute = require('./login')
const getUserRoute = require('./getUsers')
const todosRoute = require('./todos')

Router.use('/', postCityRoute)
Router.use('/', signupRoute)
Router.use('/', loginRoute)
Router.use('/', getUserRoute)
Router.use('/', todosRoute)

module.exports = Router
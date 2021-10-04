const express = require('express')
const Router = express.Router()

const postCityRoute = require('./postCities')
const signupRoute = require('./signup')
const loginRoute = require('./login')
const getUserRoute = require()

Router.use('/', postCityRoute)
Router.use('/', signupRoute)
Router.use('/', loginRoute)


module.exports = Router
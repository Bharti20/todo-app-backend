const express = require('express')
const Router = express.Router()
const postCityController = require('../controller/postCities')

Router.post('/createCity', postCityController.postCityData)


module.exports = Router
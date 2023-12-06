const express = require('express')
const route = express.Router()
const viewsControllers = require ('../controllers/viewsControllers')
route.get('/login', viewsControllers.login)
route.get('/register', viewsControllers.register)
route.get('/',viewsControllers.home)

module.exports = route
const express = require('express')
const route = express.Router()
const userControllers = require ('../controllers/userControllers')
route.post('/login', userControllers.login)
route.post('/register', userControllers.register)

module.exports = route
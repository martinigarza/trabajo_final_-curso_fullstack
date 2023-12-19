const express = require ('express')
const route = express.Router()
const productsControllers = require ('../controllers/productsControllers')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')
route.get('/',auth,productsControllers.get)
route.post('/',auth,isAdmin,productsControllers.create)
route.put('/',auth,isAdmin,productsControllers.update)
route.delete('/',auth,isAdmin,productsControllers.remove)





module.exports = route
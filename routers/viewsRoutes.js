const express=require('express')
const route = express.Router()
const viewsControllers=require('../controllers/viewsControllers')
const authMiddleware =require('../middlewares/auth')
const isAdmin=require('../middlewares/admin')
route.get('/login', viewsControllers.login)
route.get('/register', viewsControllers.register)
route.get('/',authMiddleware,viewsControllers.home)
route.get('/dashboard',authMiddleware,isAdmin,viewsControllers.dashboard)
// route.get('/cart',authMiddleware,viewsController.cart)

module.exports=route
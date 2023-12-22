const mongoose = require('mongoose')
const User =require('./userModels')
const Products = require('../models/productsModels')
const CartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    products:{
        type:[mongoose.Schema.Types.ObjectId],
        require:false,
    }
    });

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart
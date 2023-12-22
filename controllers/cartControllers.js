const Cart = require('../models/cartModel')
const Product = require ('../models/productsModels')


const update =async(req,res)=>{
    try{
        const cart = await Cart.findOne({userId:req.user._id})
        cart.products.push(req.body.productId)
        cart.save()
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
    
}
const remove = async (req,res)=>{
    try{    
      
        const cart = await Cart.findOne({userId:req.user._id})
      
        cart.products = cart.products.filter((product) =>{
            return product.toString() !== req.body.productId.toString()});
        cart.save()
        res.status(200).end()
    }catch(error){
        console.log("no deletea2")
        res.status(500).end()
    }
}
const get = async(req,res)=>{
     try{
         const Cart = await Cart.find({userId:req.user._id})
         res.status(200).json(Cart)
     }catch(error){
         res.status(500).end()
     } 
 }

 module.exports={
    update:update,
    remove:remove,
    get:get
 }
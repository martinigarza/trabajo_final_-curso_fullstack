const Product = require('../models/productsModels')

const create = async (req,res)=>{
    try{
        await Product.create({
            name:req.body.name,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description
        })
        res.status(201).end()
    }catch(error){
        res.status(500).end()
    }
    
}

const update =async(req,res)=>{
    try{
        await Product.findByIdAndUpdate(req.body.productId,req.body)
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
    
}

const remove = async (req,res)=>{
    try{
        await Product.deleteOne({_id:req.body.productId})
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
    
}

const get = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).end()
    } 
}

module.exports={
    create:create,
    update:update,
    remove:remove,
    get:get
}
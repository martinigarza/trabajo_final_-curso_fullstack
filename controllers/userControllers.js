const User = require('../models/userModels')
const userUtils = require('../utils/userUtils')
const Cart = require('../models/cartModel')
const login= async (req,res)=>{
   try{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email: email})
    const matchPassword = userUtils.comparePasswords(password,user.password,user.salt)
    console.log('matchPasswords', matchPassword)
    if(matchPassword){
        const token = userUtils.createToken(user)
        res.status(200).send(token)
    }else{
        res.status(400).send('password no match')
    }
    

   }catch(error){
    res.status(500).send(error)

   }
   
}

const register= async(req,res)=>{
    try{const email = req.body.email
        const password = req.body.password
        const photo = req.body.photo
        const name = req.body.name
        if(email && password && photo){
            const hashSalt = userUtils.createHashAndSalt(password)
            const user = await User.create({
                name: name,
                email: email,
                password: hashSalt.hash,
                salt: hashSalt.salt,
                photo: photo,
                isAdmin: false,
            })
            await Cart.create({
                userId:user._id,
            })
            res.status(201).end()
        }else{
    
        res.status(400).send('datos incompletos')
    
        }

    }catch(error){
        res.status(500).send(error)

    }
    
}

const logout =(req,res)=>{
    req.user=null
    res.clearCookie("token");
    res.status(200).end();
}

module.exports={
    login:login,
    register:register,
    logout:logout,
}
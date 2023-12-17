const userUtils = require('../utils/userUtils')
const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token
    if(token){
        const user = userUtils.validateToken(token)
        if(user){
        req.user = user.data
        next()
        }
        else{
            res.redirect('http://localhost:3000/login')
        }
    
   }else{
    res.redirect('http://localhost:3000/login')
   }
    
    
}

module.exports = authMiddleware

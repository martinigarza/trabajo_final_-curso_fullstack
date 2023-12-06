const login = (req,res)=>{
    res.render('pages/login')
}

const register = (req,res)=>{
    res.render('pages/register')
}

const home = (req,res)=>{
    res.render('pages/home')
}

module.exports = {
    login:login,
    register:register,
    home:home
}
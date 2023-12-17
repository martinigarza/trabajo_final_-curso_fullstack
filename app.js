const express = require('express')
const bodyParser = require('body-parser')
const viewsRoutes = require('./routers/viewsRoutes')
const userRoutes = require('./routers/userRoutes')
const mongoose = require('mongoose')
// const productsRoutes = require('./routers/productsRoute')
// const cartRoutes = require('./routers/cartRoutes')

const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = 3000

//middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'))
app.set('view engine','ejs');


//rutas
app.use('/',viewsRoutes)

//rutas de recursos
app.use('/api/user/',userRoutes)
// app.use('/api/cart/', cartRoutes)
// app.use('/api/product/',productsRoutes)

app.listen(port, async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/proyecto_final')
    console.log(`Example app listening on port ${port}`)
  }catch(error){
    console.log('error to connect mongoDB',error)
  }
  
})
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

// ----------DB configuration--------------------------
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('connection succesfull')
}).catch(err=>console.log(err))

// ----------MiddleWares--------------------------
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(cookieParser())

//  -----------Routes-----------------------------
// app.use(require("./routes/adminRoutes/adminRoutes"))
app.use(require("./routes/supplierRoutes"))
app.use(require("./routes/commonRoutes"))
app.use(require('./routes/adminRoutes'))

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

// ----------DB configuration--------------------------
const mongoose = require('mongoose')
const exp = require('constants')
const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('connection succesfull')
}).catch(err=>console.log(err))

// ----------MiddleWares--------------------------
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())

//  -----------Routes-----------------------------

app.use(require("./routes/supplierRoutes"))
app.use(require("./routes/commonRoutes"))
app.use(require('./routes/adminRoutes'))

// ----------deployment---------------------------

if(process.env.NODE_ENV === "production"){
    console.log(path.join(__dirname, "frontend", "build", "index.html"))
    app.use(express.static(path.join(__dirname, "frontend", "build")))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
}

// ----------deployment---------------------------

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

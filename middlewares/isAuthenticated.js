const jwt = require('jsonwebtoken')
const User = require('../models/User')

const isAuthenticated = async (req, res, next) =>{
    try {
        const {userInfo} = req.cookies
        if(!userInfo) return res.status(401).json({msg : "Please Login"})
    
        const data = JSON.parse(userInfo)
        const decodedData =  jwt.verify(data.authToken, process.env.JWT_SECRET)
        const resp = await User.findById(decodedData._id).select("-password")
        req.user = resp;
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong"})
    }
}

module.exports = isAuthenticated
const Admin = require('../Models/Admin')
const Supplier = require('../Models/Supplier')
const { verifyAndSendInfo } = require("../utils/tokenUtils")

const fetchUser = async (req, res) =>{
    try {
        const {userInfo} = req.cookies

        if(!userInfo) return res.status(400).json({msg : "Please Login"})

        const data = JSON.parse(userInfo)
        
        if (data.userType === "admin") {
            verifyAndSendInfo(data.authToken, Admin, res)
        }else{
            verifyAndSendInfo(data.authToken, Supplier, res)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}


const logoutUser = async (req, res) =>{
    try {
        res.cookie('userInfo', null, {
            expires : new Date(Date.now()),
            httpOnly : true
        })
        res.cookie('token', null, {
            expires : new Date(Date.now()),
            httpOnly : true
        })
        res.status(200).json({msg : "success"})
    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err})
    }
}

module.exports = {fetchUser, logoutUser}
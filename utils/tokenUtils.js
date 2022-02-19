const jwt = require('jsonwebtoken')

const sendToken =  (user, res)=>{
    const token = user.getToken()
    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly : true
    }
    const data = {
        userType : user.userType,
        authToken : token
    }
    console.log(data.authToken)
    res.status(200).cookie('userInfo', JSON.stringify(data), options).json({
        msg : "success",
        response : user
    })
}

// const verifyAndSendInfo = async (token, User, res)=>{
//     try {
//         const decodedData =  jwt.verify(token, process.env.JWT_SECRET)
//         const resp = await User.findById(decodedData._id).select("-password")
//         res.status(200).json({msg : "success", response : resp})
//     } catch (err) {
//          console.log(err)
//     }
// }

module.exports = {sendToken}
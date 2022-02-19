const User = require('../models/User')
const { sendToken } = require('../utils/tokenUtils')

 const registerUser = async(req, res)=>{
    const {name, email, mobileNo, password} = req.body
    if(!name || !email || !mobileNo || !password){
        return res.status(400).json({msg : "one or more field required"})
    }
    if(mobileNo <= 999999999){
        return res.status(400).json({msg : "Enter a 10 digit number"})
    }
    
    try{
        const foundUser = await User.findOne({email})
        if(foundUser) return res.status(400).json({msg : "User already exist"})

        const user = new User({
            name,
            email,
            password,
            mobileNo,
        })

        const savedUser = await user.save()
        sendToken(savedUser, res)

    }catch(err){
        console.log(err)
        await User.deleteOne({email})
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}
// ============Login User===============

 const loginUser = async (req, res) =>{
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({msg : "one or more fields required"})

    try {
        const foundUser = await User.findOne({ email });
        if(!foundUser) return res.status(400).json({msg : "Either email or password is wrong"})

        const isMatching =  foundUser.comparePassword(password);
        if(!isMatching) return res.status(400).json({msg : "Either email or password is wrong"})

        sendToken(foundUser, res)

    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err})
    }
}

// ============fetch User===============

const fetchUser = async (req, res) =>{
    try {
        return res.status(200).json({msg : "success", response : req.user})

    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}

// ============logout User===============

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

module.exports = {registerUser, loginUser, fetchUser, logoutUser}
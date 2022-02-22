const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    userType : {
        type : String,
        default : "supplier"
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : [validator.isEmail, "Enter a valid email"]
    },
    mobileNo : {
        type : Number,
        required : true,
        min : [999999999, "Enter a valid mobile no."],
        max : [9999999999, "Enter a valid mobile no."],
        unique : true
    },
    password : {
        type : String,
        required : true
    },
},{timestamps : true})

// --------Hashing password------------------------
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

// --------Comparing password------------------------
userSchema.methods.comparePassword = async function(password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        console.log(err)
    }
}

// --------generatingToken----------------------------

userSchema.methods.getToken = function(){
    return jwt.sign({_id : this._id}, process.env.JWT_SECRET,{
        expiresIn : Math.floor(Date.now()/1000) + process.env.COOKIE_EXPIRE*24*60*60
    })
}

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const supplierSchema = new mongoose.Schema({
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
        unique : true
    },
    phoneNo : {
        type : Number,
        required : true,
        min : 999999999,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
},{timestamps : true})

// --------Hashing password------------------------
supplierSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next();
})

// --------Comparing password------------------------
supplierSchema.methods.comparePassword = async function(password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        console.log(err)
    }
}

// --------generatingToken----------------------------

supplierSchema.methods.getToken = function(){
    return jwt.sign({_id : this._id}, process.env.JWT_SECRET,{
        expiresIn : Math.floor(Date.now()/1000) + process.env.COOKIE_EXPIRE*24*60*60
    })
}

module.exports = mongoose.model('Supplier', supplierSchema)
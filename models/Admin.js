// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const adminSchema = new mongoose.Schema({
//     userType : {
//         type : String,
//         default : "admin"
//     },
//     email : {
//         type : String,
//         required : true
//     },
//     password : {
//         type : String,
//         required : true
//     }
// },{timestamps : true})

// // --------Hashing password------------------------
// adminSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, 10)
//     }
//     next();
// })

// // --------Comparing password------------------------
// adminSchema.methods.comparePassword = async function(password){
//     try {
//         return await bcrypt.compare(password, this.password)
//     } catch (err) {
//         console.log(err)
//     }
// }

// // --------generatingToken----------------------------

// adminSchema.methods.getToken = function(){
//     return jwt.sign({_id : this._id}, process.env.JWT_SECRET,{
//         expiresIn : Math.floor(Date.now()/1000) + process.env.COOKIE_EXPIRE*24*60*60
//     })
// }

// module.exports = mongoose.model('Admin', adminSchema)
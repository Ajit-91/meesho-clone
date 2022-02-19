const Supplier = require('../models/Supplier')
const { sendToken } = require('../../utils/tokenUtils')

 exports.registerSupplier = async(req, res)=>{
    const {name, email, phoneNo, password} = req.body
    if(!name || !email || !phoneNo || !password){
        return res.status(400).json({msg : "one or more field required"})
    }
    if(phoneNo <= 999999999){
        return res.status(400).json({msg : "Enter a 10 digit number"})
    }

    try{
        const foundSupplier = await Supplier.findOne({email})
        if(foundSupplier) return res.status(400).json({msg : "Supplier already exist"})

        const supplier = new Supplier({
            name,
            email,
            password,
            phoneNo,
        })

        const savedSupplier = await supplier.save()
        sendToken(savedSupplier, res)

    }catch(err){
        console.log(err)
        await Supplier.deleteOne({email})
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}
// ============Login Supplier===============

 exports.loginSupplier = async (req, res) =>{
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({msg : "one or more fields required"})

    try {
        const foundSupplier = await Supplier.findOne({ email });
        if(!foundSupplier) return res.status(400).json({msg : "Either email or password is wrong"})

        const isMatching =  foundSupplier.comparePassword(password);
        if(!isMatching) return res.status(400).json({msg : "Either email or password is wrong"})

        sendToken(foundSupplier, res)

    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err})
    }
}

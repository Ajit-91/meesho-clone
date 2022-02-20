const Catalog = require('../models/Catalog')

const addCatalog = async(req, res) => {
    try {
        const {creator, category, image, MRP, meeshoPrice} = req.body
        if(!creator || !category || !image || !MRP || !meeshoPrice) return res.status(400).json({msg : "one or more fields required"})
        
        const catalog = new Catalog({
            ...req.body
        })
        const savedCatalog = await catalog.save()
        res.status(200).json({msg : "success", response : savedCatalog})

    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}

const fetchMyCatalogs = async (req, res) =>{
    try {
        const foundCatalogs = await Catalog.find({creator : req.user._id}).sort({createdAt : "desc"})
        res.status(200).json({msg : "success", response : foundCatalogs})
    } catch (err) {
        console.log(err)
        res.status(500).json({msg : "something went wrong", error : err.message})
    }
}

module.exports = {addCatalog, fetchMyCatalogs}
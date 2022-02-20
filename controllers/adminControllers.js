const Catalog = require("../models/Catalog")

const fetchAllCatalogs = async (req, res) => {
     try {
          const catalogs = await Catalog.find().sort({createdAt : "desc"})
          res.status(200).json({ msg: "success", response: catalogs })
     } catch (error) {
          console.log(err)
          res.status(500).json({ msg: "something went wrong", error: err.message })
     }
}

const approveCatalog = async (req, res) => {
     try {
          const { catalogid } = req.params
          const foundCatalog = await Catalog.findById(catalogid)

          if (!foundCatalog) return res.status(404).json({ msg: "Catalog not found" })

          foundCatalog.status = "Live"
          const savedCatalog = await foundCatalog.save()
          res.status(200).json({ msg: "success", response: savedCatalog })
     } catch (err) {
          console.log(err)
          res.status(500).json({ msg: "something went wrong", error: err.message })
     }
}

module.exports = { fetchAllCatalogs, approveCatalog }
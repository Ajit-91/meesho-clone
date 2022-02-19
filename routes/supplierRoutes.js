const express = require('express')
const router = express.Router()
const { addCatalog } = require("../controllers/supplierControllers")
const  isAuthenticated = require('../middlewares/isAuthenticated')

router.get("/api/add-catalog", isAuthenticated, addCatalog)
router.get('/api/get-my-catalogs')
module.exports = router
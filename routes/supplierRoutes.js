const express = require('express')
const router = express.Router()
const { addCatalog, fetchMyCatalogs } = require("../controllers/supplierControllers")
const  isAuthenticated = require('../middlewares/isAuthenticated')

router.post("/api/supplier/add-catalog", isAuthenticated, addCatalog)
router.get('/api/supplier/fetch-my-catalogs', isAuthenticated, fetchMyCatalogs)

module.exports = router
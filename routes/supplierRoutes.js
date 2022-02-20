const express = require('express')
const router = express.Router()
const { addCatalog, fetchMyCatalogs } = require("../controllers/supplierControllers")
const  isAuthenticated = require('../middlewares/isAuthenticated')

router.post("/api/add-catalog", isAuthenticated, addCatalog)
router.get('/api/fetch-my-catalogs', isAuthenticated, fetchMyCatalogs)

module.exports = router
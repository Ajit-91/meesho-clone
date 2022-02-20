const express = require("express");
const { approveCatalog, fetchAllCatalogs } = require("../controllers/adminControllers");
const  isAdmin = require("../middlewares/isAdmin");
const  isAuthenticated = require("../middlewares/isAuthenticated");
const router = express.Router()

router.get("/api/admin/approve-catalog/:catalogid", isAuthenticated, isAdmin, approveCatalog)
router.get("/api/admin/fetch-all-catalogs", isAuthenticated, isAdmin, fetchAllCatalogs)

module.exports = router

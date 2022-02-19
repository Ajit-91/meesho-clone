const express = require("express");
const { approveCatalog } = require("../controllers/adminControllers");
const { isAdmin } = require("../middlewares/isAdmin");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const router = express.Router()

router.get("/api/admin/approve", isAuthenticated, isAdmin, approveCatalog)

module.exports = router

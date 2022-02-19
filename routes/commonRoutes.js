const express = require("express");
const { fetchUser, logoutUser } = require("../controllers/commonControllers");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const router = express.Router()

router.get("/api/fetchUser", isAuthenticated, fetchUser)
router.get("/api/logout", logoutUser)

module.exports = router
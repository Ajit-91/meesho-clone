const express = require("express");
const { fetchUser, logoutUser } = require("../controllers/commonControllers");
const router = express.Router()

router.get("/api/fetchUser", fetchUser)
router.get("/api/logout", logoutUser)

module.exports = router
const express = require("express");
const router = express.Router()
const { fetchUser, logoutUser, loginUser, registerUser } = require("../controllers/commonControllers");
const  isAuthenticated = require("../middlewares/isAuthenticated");

router.post('/api/login', loginUser)
router.post('/api/register', registerUser)
router.get("/api/logout", logoutUser)
router.get("/api/fetch-user", isAuthenticated, fetchUser)

module.exports = router
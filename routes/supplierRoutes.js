const express = require('express')
const router = express.Router()
const { registerSupplier, 
            loginSupplier
          } = require("../controllers/supplierControllers")

router.post("/api/register-supplier", registerSupplier)
router.post("/api/login-supplier", loginSupplier)

module.exports = router
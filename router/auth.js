const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
// const checkTenant = require("../middleware/checkTenant");
// let validate = require("../validation/validationMiddleware");
// const isAuth = require("../middleware/isAuth");

// auth router
router.post("/", authController.test);
router.post("/as", authController.decrypt);
module.exports = router;

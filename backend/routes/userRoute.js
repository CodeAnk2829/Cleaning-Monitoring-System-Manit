const express = require('express');
const router = express.Router();
const  { userRegister, userLogin }  = require("../controllers/userController.js");
const { } = require("../controllers/feedbackController.js");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/ratings", );

module.exports = router;
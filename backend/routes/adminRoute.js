const express = require("express");
const router = express.Router();

const { authMiddleware, authorizeRoles } = require("../middleware/authMiddleware");
const { userRegister } = require("../controllers/userController");

router.post("/cleaner-assignment", authMiddleware, authorizeRoles("admin"), userRegister);

module.exports = router;
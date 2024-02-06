const express = require("express");
const router = express.Router();

const { getAdmins } = require("../controllers/adminController");
const { setBuildingDetails } = require("../controllers/buildingController");

router.get("/building-details", getAdmins);
router.post("/set-building", setBuildingDetails);

module.exports = router;
const { Router } = require("express");
const router = Router();

const { setRatings } = require("../controllers/feedbackController");

router.post("/send-feedback", setRatings); // we should check from where the request is coming otherwise anyone can send request and lead to memory leak

module.exports = router;
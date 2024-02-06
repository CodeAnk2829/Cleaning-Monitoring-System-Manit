const { Router } = require("express");
const router = Router();

const { feedbackPageStatus, setRatings } = require("../controllers/feedbackController");

router.get("/feedback-page-status", feedbackPageStatus);
router.post("/send-feedback", setRatings); // we should check from where the request is coming otherwise anyone can send request and lead to memory leak

module.exports = router;
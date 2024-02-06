const { Router } = require("express");
const router = Router();

const adminRouter = require("./adminRoute");
const buildingRouter = require("./buildingRoute");
const feedbackRouter = require("./feedbackRoute");
const userRouter = require("./userRoute");


router.use("/admin", adminRouter);
router.use("/building", buildingRouter);
router.use("/feedback", feedbackRouter);
router.use("/user", userRouter);

module.exports = router;
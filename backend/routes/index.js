const { Router } = require("express");
const router = Router();

const adminRouter = require("./adminRoute");
const buildingRouter = require("./buildingRoute");
const userRouter = require("./userRoute");


router.use("/admin", adminRouter);
router.use("/building", buildingRouter);
router.use("/user", userRouter);


module.exports = router;
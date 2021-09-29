const express = require("express");
const router = express.Router();
const enginesRouter = require("./routes/engines");
const carsRouter = require("./routes/cars");

/**
 * middleware
 */
router.use("/engines", enginesRouter);
router.use("/cars", carsRouter);

module.exports = router;

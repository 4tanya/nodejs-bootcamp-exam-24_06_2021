const express = require("express");
const router = express.Router();
const authRouter = require("./routes/auth");

/**
 * middleware
 */
router.use("/auth", authRouter);

module.exports = router;

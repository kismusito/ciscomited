const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { getAttendees } = require("../controllers/minuteController");

router
    .get("/getAttendees/:id", verifyMiddleware, getAttendees);

module.exports = router;

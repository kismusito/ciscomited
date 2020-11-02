const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { generateCitation, generateMinute } = require("../controllers/generatePDFController");

router
    .post("/generateCitation", verifyMiddleware, generateCitation)
    .post("/generateMinute", verifyMiddleware, generateMinute);

module.exports = router;

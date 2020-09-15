const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { generateCitation, generateMinute } = require("../controllers/generatePDFController");

router.post("/generateCitation", verifyMiddleware, generateCitation);
router.post("/generateMinute", verifyMiddleware, generateMinute);

module.exports = router;

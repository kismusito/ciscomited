const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { searchAppretices, searchAppretice } = require("../controllers/searchController");

router.post("/searchAppretices", verifyMiddleware, searchAppretices);
router.post("/searchAppretice", verifyMiddleware, searchAppretice);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { searchAppretices, searchAppretice } = require("../controllers/searchController");

router
    .post("/searchAppretices", verifyMiddleware, searchAppretices)
    .post("/searchAppretice", verifyMiddleware, searchAppretice);

module.exports = router;

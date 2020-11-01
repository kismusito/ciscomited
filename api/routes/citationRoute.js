const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getFields } = require("../controllers/citationController");

router
    .get("/getFields/:type", verifyMiddleware, getFields)

module.exports = router;

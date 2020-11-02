const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { createMailConfig, createMailType } = require("../controllers/mailController");

router
    .post("/createMailType", verifyMiddleware, createMailType)
    .post("/createMail", verifyMiddleware, createMailConfig);

module.exports = router;

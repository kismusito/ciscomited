const express = require("express");
const router = express.Router();
const { test } = require("../controllers/mailController");

router.get("/testMail", test);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getDrawSolicity } = require("../controllers/solicityController");

router.get("/getDrawSolicity", verifyMiddleware, getDrawSolicity);

module.exports = router;

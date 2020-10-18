const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getAppreticeInfo, saveAppreticeInfo } = require("../controllers/appreticeController");

router.post("/getAppreticeInfo", verifyMiddleware, getAppreticeInfo);
router.post("/saveAppreticeInfo", verifyMiddleware, saveAppreticeInfo);

module.exports = router;

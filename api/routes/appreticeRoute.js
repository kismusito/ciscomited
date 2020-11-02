const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { getAppreticeInfo, saveAppreticeInfo } = require("../controllers/appreticeController");

router
    .post("/getAppreticeInfo", verifyMiddleware, getAppreticeInfo)
    .post("/saveAppreticeInfo", verifyMiddleware, saveAppreticeInfo);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getMotiverOrProhibitions , getDrawSolicity , saveMotiveOrProhibition , saveSolicity , getSolicities} = require("../controllers/solicityController");

router.get("/getDrawSolicity", verifyMiddleware, getDrawSolicity);
router.get("/getSolicities", verifyMiddleware, getSolicities);
router.get("/getMotiverOrProhibitions", verifyMiddleware, getMotiverOrProhibitions);
router.post("/saveMotiveOrProhibition", verifyMiddleware, saveMotiveOrProhibition);
router.post("/saveSolicity", verifyMiddleware, saveSolicity);

module.exports = router;

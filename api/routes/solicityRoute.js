const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getMotiverOrProhibitions , getDrawSolicity , saveMotiveOrProhibition } = require("../controllers/solicityController");

router.get("/getDrawSolicity", verifyMiddleware, getDrawSolicity);
router.get("/getMotiverOrProhibitions", verifyMiddleware, getMotiverOrProhibitions);
router.post("/saveMotiveOrProhibition", verifyMiddleware, saveMotiveOrProhibition);

module.exports = router;

const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getMotiverOrProhibitions , getDrawSolicity , saveMotiveOrProhibition , saveSolicity , getSolicities , changeSolicityStatus , getSolicityDetails} = require("../controllers/solicityController");

router.get("/getDrawSolicity", verifyMiddleware, getDrawSolicity);
router.get("/getSolicities", verifyMiddleware, getSolicities);
router.get("/getMotiverOrProhibitions", verifyMiddleware, getMotiverOrProhibitions);
router.post("/saveMotiveOrProhibition", verifyMiddleware, saveMotiveOrProhibition);
router.post("/saveSolicity", verifyMiddleware, saveSolicity);
router.put("/changeSolicityStatus", verifyMiddleware, changeSolicityStatus);
router.get("/getSolicityDetails/:id", verifyMiddleware, getSolicityDetails);

module.exports = router;

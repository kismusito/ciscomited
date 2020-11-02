const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const {
    getMotiverOrProhibitions,
    getDrawSolicity,
    saveMotiveOrProhibition,
    saveSolicity,
    getSolicities,
    changeSolicityStatus,
    getSolicityDetails,
} = require("../controllers/solicityController");

router
    .get("/getDrawSolicity", verifyMiddleware, getDrawSolicity)
    .get("/getSolicities", verifyMiddleware, getSolicities)
    .get("/getSolicityDetails/:id", verifyMiddleware, getSolicityDetails)
    .get("/getMotiverOrProhibitions", verifyMiddleware, getMotiverOrProhibitions)
    .post("/saveMotiveOrProhibition", verifyMiddleware, saveMotiveOrProhibition)
    .post("/saveSolicity", verifyMiddleware, saveSolicity)
    .put("/changeSolicityStatus", verifyMiddleware, changeSolicityStatus);

module.exports = router;

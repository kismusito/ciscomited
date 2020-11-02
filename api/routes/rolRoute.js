const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const { getAllRols, addNewRol, getRolsCapacities } = require("../controllers/rolController");

router
    .get("/getRolCapacities", verifyMiddleware, getRolsCapacities)
    .post("/getAddRoles", verifyMiddleware, getAllRols)
    .post("/addRol", verifyMiddleware, addNewRol);

module.exports = router;

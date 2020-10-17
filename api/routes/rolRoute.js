const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getAllRols, addNewRol , getRolsCapacities} = require("../controllers/rolController");

router.post("/getAddRoles", verifyMiddleware, getAllRols);
router.post("/addRol", verifyMiddleware, addNewRol);
router.get("/getRolCapacities", verifyMiddleware, getRolsCapacities);

module.exports = router;

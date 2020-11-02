const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { getFields, create , getTemplates} = require("../controllers/templateController");

router
    .get("/getFields/:type", verifyMiddleware, getFields)
    .get("/getTemplates", verifyMiddleware, getTemplates)
    .post("/createTemplate", verifyMiddleware, create);

module.exports = router;

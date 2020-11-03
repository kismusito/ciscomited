const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../middlewares/verifyMiddleware");
const {
    getFields,
    create,
    getTemplates,
    updateTemplate,
    deleteTemplate,
} = require("../controllers/templateController");

router
    .get("/getFields/:type", verifyMiddleware, getFields)
    .get("/getTemplates", verifyMiddleware, getTemplates)
    .post("/createTemplate", verifyMiddleware, create)
    .put("/updateTemplate", verifyMiddleware, updateTemplate)
    .delete("/deleteTemplate", verifyMiddleware, deleteTemplate);

module.exports = router;

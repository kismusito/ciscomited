const express = require("express");
const router = express.Router();
const upload = require("../controllers/xmlControllerUpload");
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { uploadAppretices , uploadInstructors} = require("../controllers/uploadController");

router.post("/uploadAppretices", verifyMiddleware, upload.single("fileUpload"), uploadAppretices);
router.post("/uploadInstructors", verifyMiddleware, upload.single("fileUpload"), uploadInstructors);

module.exports = router;

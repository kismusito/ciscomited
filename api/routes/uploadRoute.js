const express = require("express");
const router = express.Router();
const upload = require("../controllers/uploads/xmlControllerUpload");
const uploadSolicities = require("../controllers/uploads/solicityUploadFiles");
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const { uploadAppretices , uploadInstructors , uploadSolicityFiles} = require("../controllers/uploadController");

router.post("/uploadAppretices", verifyMiddleware, upload.single("fileUpload"), uploadAppretices);
router.post("/uploadInstructors", verifyMiddleware, upload.single("fileUpload"), uploadInstructors);
router.post("/uploadNewFileSolicity", verifyMiddleware, uploadSolicities.any("fileUpload"), uploadSolicityFiles);

module.exports = router;

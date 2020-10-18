const express = require("express");
const router = express.Router();
const { verifyMiddleware } = require("../controllers/verifyMiddleware");
const {
    register,
    getRoleInfo,
    searchUsers,
    searchUser,
    editUserSearch,
    getCitations,
    getSelectedCitation,
    uploadNewCitationStatus,
    updatePassword,
} = require("../controllers/userController");
const upload = require("../controllers/uploads/pdfControllerUpload");

router.post("/register", verifyMiddleware, register);
router.post("/getRoleInfo", verifyMiddleware, getRoleInfo);
router.post("/searchUsers", verifyMiddleware, searchUsers);
router.post("/searchUser", verifyMiddleware, searchUser);
router.post("/editUser", verifyMiddleware, editUserSearch);
router.post("/getCitations", verifyMiddleware, getCitations);
router.post("/getSelectedCitation", verifyMiddleware, getSelectedCitation);
router.post("/updatePassword", verifyMiddleware, updatePassword);
router.post(
    "/uploadNewCitationStatus",
    verifyMiddleware,
    upload.single("newFileToUpload"),
    uploadNewCitationStatus
);

module.exports = router;

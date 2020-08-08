const express = require('express')
const router = express.Router()
const upload = require('../controllers/xmlControllerUpload')
const {verifyMiddleware} = require('../controllers/verifyMiddleware')
const {uploadAppretices} = require('../controllers/uploadController')

router.post('/uploadAppretices' , verifyMiddleware , upload.single('fileUpload') ,  uploadAppretices)

module.exports = router
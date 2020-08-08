const express = require('express')
const router = express.Router()
const {verifyMiddleware} = require('../controllers/verifyMiddleware')
const { register , getRoleInfo , searchUsers , searchUser , editUserSearch} = require('../controllers/userController')

router.post('/register' , verifyMiddleware , register)
router.post('/getRoleInfo' , verifyMiddleware , getRoleInfo)
router.post('/searchUsers' , verifyMiddleware , searchUsers)
router.post('/searchUser' , verifyMiddleware , searchUser)
router.post('/editUser' , verifyMiddleware , editUserSearch)

module.exports = router
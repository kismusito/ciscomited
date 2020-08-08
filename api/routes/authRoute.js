const express = require('express')
const router = express.Router()
const { login , validateToken } = require('../controllers/authController')

router.post('/login' , login)
router.post('/validateToken' , validateToken)

module.exports = router
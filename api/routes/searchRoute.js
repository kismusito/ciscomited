const express = require('express')
const router = express.Router()
const {verifyMiddleware} = require('../controllers/verifyMiddleware')
const {searchAppretices} = require('../controllers/searchController')

router.post('/searchAppretices' , verifyMiddleware , searchAppretices)

module.exports = router
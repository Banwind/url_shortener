const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const short = require('./modules/short')

router.use('/shortener', short)
router.use('/', home)

module.exports = router
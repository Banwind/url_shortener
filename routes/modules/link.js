const express = require('express')
const router = express.Router()
const URLs = require('../../models/urls')

router.get('/:short_url', (req, res) => {
  const { short_url } = req.params
  URLs.find()
    .lean()
    
})

module.exports = router
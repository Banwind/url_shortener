const express = require('express')
const router = express.Router()
const URLs = require('../../models/urls')

router.get('/', (req, res) => {
  const origin_url = req.query.origin_url // 獲取 URL 中的查詢參數（Query String），即 URL 中問號後面的參數
  console.log(origin_url)
  URLs.find()
    .lean()
    .then(() => res.render('short.hbs'))
    .catch(error => console.error(error))
})

module.exports = router

// 還需要改動
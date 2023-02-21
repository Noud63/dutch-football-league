const express = require('express')
const router = express.Router()
const getFootballData = require('./footballDataController')

router.route('/').get(getFootballData)
module.exports = router
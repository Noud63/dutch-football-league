const express = require('express')
const router = express.Router()
const getFootballData = require('./footballDataController')

router.route('/api').get(getFootballData)
module.exports = router
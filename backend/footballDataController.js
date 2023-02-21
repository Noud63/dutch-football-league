const express = require('express')
const axios = require('axios')
const asyncHandler = require('express-async-handler')

const URL = "https://api.football-data.org/v2/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v2/competitions/DED/matches";

const getFootballData = asyncHandler(async (req, res) => {

   const response =  await axios.all([
        await axios.get(URL, {
            headers: {
                "X-Auth-Token": process.env.REACT_APP_API_KEY
            }
        }),
        await axios.get(URL2, {
            headers: {
                "X-Auth-Token": process.env.REACT_APP_API_KEY
            }
        })
    ])

    const allData = { standings: response[0].data, matches: response[1].data }
    res.status(200).send(allData)
})

module.exports = getFootballData
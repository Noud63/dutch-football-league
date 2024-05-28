const express = require('express')
const axios = require('axios')
const asyncHandler = require('express-async-handler')

const URL = "https://api.football-data.org/v4/competitions/DED/standings";
const URL2 = "https://api.football-data.org/v4/competitions/DED/matches";
const URL3 = "https://api.football-data.org/v4/competitions/DED/teams";
// const URL4 = "https://api.football-data.org/v4/competitions/DED/";

const getFootballData = asyncHandler(async (req, res) => {

   const response = await axios.all([
     await axios.get(URL, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
         "Access-Control-Allow-Origin":
           "*",
       },
     }),
     await axios.get(URL2, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
         "Access-Control-Allow-Origin":
           "*",
       },
     }),
     await axios.get(URL3, {
       headers: {
         "X-Auth-Token": process.env.REACT_APP_API_KEY,
         "Access-Control-Allow-Origin":
           "*",
       },
     }),
     // await axios.get(URL4, {
     //     headers: {
     //         "X-Auth-Token": process.env.REACT_APP_API_KEY,
     //         "Access-Control-Allow-Origin": "http://localhost:3000"
     //     }
     // })
   ]);

        // const teams = response[2].data.teams
        // console.log(teams)

    const allData = { standings: response[0].data, matches: response[1].data }

    res.status(200).send(allData)
})

module.exports = getFootballData
import React, { useEffect, useContext, useState, useCallback } from 'react'
import AllDataReducer from './reducers/AllDataReducer'
import axios from 'axios'

const AllApiData = React.createContext()

const initialState = {
    leftRow: [],
    rightRow: [],
    matches: [],
    matchByDay: [],
    totalMatches: 0
}

const AllData = ({ children }) => {

    const [state, dispatchState] = React.useReducer(AllDataReducer, initialState)

    const [matchDays, setMatchDays] = useState([])
    const [currentDay, setCurrentDay] = useState(1)       // 1 t/m 34
    const [matchDay, setMatchDay] = useState([])
    const [ranking, setRanking] = useState([])

    const getData = useCallback(async () => {
        
        dispatchState({ type: "DATA_REQUEST" })

        try {
            const response = await axios('/api/footballData')

            console.log(response)

                    const ranking = response.data.standings.standings[0].table
                    const matches = response.data.matches.matches
                    setRanking(ranking)

                    for (let club of ranking) {
                        club.team.name = club.team.name
                            .replace("Rotterdam", "")
                            .replace("'65", "")
                            .replace("Almelo", "")
                            .replace("AFC", "")
                            .replace("Tilburg", "")
                            .replace("SBV", "")
                            .replace("-Leeuwarden", "")
                            .replace("Go Ahead", "GA")
                    }

                    for (let club of matches) {
                        club.homeTeam.name = club.homeTeam.name
                            .replace("Rotterdam", "")
                            .replace("'65", "")
                            .replace("Almelo", "")
                            .replace("AFC", "")
                            .replace("Tilburg", "")
                            .replace("SBV", "")
                            .replace("-Leeuwarden", "")
                            .replace("Go Ahead", "GA")

                        club.awayTeam.name = club.awayTeam.name
                            .replace("Rotterdam", "")
                            .replace("'65", "")
                            .replace("Almelo", "")
                            .replace("AFC", "")
                            .replace("Tilburg", "")
                            .replace("SBV", "")
                            .replace("-Leeuwarden", "")
                            .replace("Go Ahead", "GA")


                        if (club.score.fullTime.home === null || club.score.fullTime.away === null) {
                            club.score.fullTime.home = "?";
                            club.score.fullTime.away = "?";
                        }
                    }

                    // Create an array of arrays of objects( matches by gameround, 34 weeks of 9 matches each) [ [{match} x 9], x 34]
                    let byMatchDay = Object.values(
                        matches.reduce((acc, m) => {
                            acc[m.matchday] = acc[m.matchday] || [];
                            acc[m.matchday].push(m);
                            return acc;
                        }, {})
                    );

                    const defaultPost = byMatchDay[0]
                    setMatchDays(defaultPost)

                    const leftRow = ranking.slice(0, 9)
                    const rightRow = ranking.slice(9, 18)
                    const matchByDay = byMatchDay
                    const totalMatches = matches.length / leftRow.length
                    const day = response.data.standings.season.currentMatchday
                    setMatchDay(day)

                    const data = {
                        leftRow: leftRow,
                        rightRow: rightRow,
                        matches: matches,
                        matchByDay: matchByDay,
                        totalMatches: totalMatches,
                        currentMatchday: day
                    }

                    dispatchState({ type: "DATA_REQUEST_SUCCESS", payload: data })
                    console.log(data);


        } catch (error) {
            dispatchState({ type: "DATA_REQUEST_FAIL" })
            console.error("No data! Try again or wait for just a minute, maybe your request limit has exceeded.")
        }
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    
    return <AllApiData.Provider value={{ state, ranking, currentDay, setCurrentDay, setMatchDays, matchDays, matchDay }}>{children}</AllApiData.Provider>

}

export const useGlobalContext = () => {
    return useContext(AllApiData)
}

export { AllApiData, AllData }


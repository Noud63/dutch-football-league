import { useGlobalContext } from './Context'
import Loader from './Loader';
import Pagination from './Pagination'
import styles from './styles/AllMatches.module.css'

const Uitslagen = () => {

    const { state, currentDay, matchDays, setCurrentDay, setMatchDays } = useGlobalContext()

    return (

        <div className={styles.container}>
            <div className={styles.matches}>

                <div className={styles.gamesnRound}>
                    <div className={styles.alleWedstrijden}>Alle wedstrijden</div>
                    < div className={styles.speelrondes} > Speelronde <div className={styles.circle}><div className={styles.dayNumber}>{currentDay}</div></div></ div>
                </div>

                {state.loading ? <Loader /> :

                    matchDays.map((game) => {
                        const { homeTeam, awayTeam, score, id } = game

                        return (
                            <div className={styles.match} key={id}>
                                <div className={styles.teams}>
                                    <div className={styles.hometeam}>{homeTeam.name}</div>
                                    <div className={styles.scores}>{score.fullTime.home} : {score.fullTime.away}</div>
                                    <div className={styles.awayteam}>{awayTeam.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <Pagination currentDay={currentDay} totalMatches={state.totalMatches} state={state} setCurrentDay={setCurrentDay} setMatchDays={setMatchDays} matchDays={matchDays}/>

        </div>
    )
}

export default Uitslagen


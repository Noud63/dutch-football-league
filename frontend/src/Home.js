import React from 'react'
import goal from './images/goal.jpg'
import eredivisie65 from './images/eredivisie65.png'
import goal2 from './images/goal2.jpg'
import goal3 from './images/goal3.jpg'
import goal4 from './images/goal4.jpg'
import vvv1 from './images/vvv1.jpg'
import malen from './images/malen.jpg'
import berghuis from './images/berghuis.jpg'
import til from './images/til.jpg'
import karlsson from './images/karlsson.jpg'
import haller from './images/haller.jpg'
import Uitslagen from './Uitslagen'
import Stand from './Stand'
import Recent from './Recent'
import styles from './styles/Home.module.css'
import Clubs from './Clubs'
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className={styles.schaal}>
                <img src={goal3} className={styles.schaalPic} alt="" />
                <div className={styles.ere65}><img src={eredivisie65} alt="" className={styles.eredivisie65} /></div>
                    <div className={styles.history}>
                    Het ontstaan van de Eredivisie gaat ver terug in de tijd.
                    De voorloper van de Eredivisie was de kampioenscompetitie.
                    Al sinds 1888 wordt er officieus gestreden om het Nederlands kampioenschap. 
                    Met ingang van het seizoen 1898/'99 werd dit officieel, waarna Concordia uit Rotterdam zich als eerste landskampioen van Nederland mocht noemen. 
                    Na de introductie van het betaald voetbal in 1954 werd twee jaar later de Eredivisie officieel opgericht. 
                    Zodoende zijn sinds 1956 de sterkste clubs van Nederland verenigd in één landelijke competitie.<br />
                    <Link to='/history' style={{ textDecoration: 'none' }}>
                        <span className={styles.leeshiermeer} >Lees hier meer.......</span>
                    </Link>
                    
                    </div>
               </div>

            <div className={styles.history2}>
                <div className={styles.historyText}>
                <div className={styles.stukje}>De geschiedenis</div>
                Het ontstaan van de Eredivisie gaat ver terug in de tijd.
                De voorloper van de Eredivisie was de kampioenscompetitie.
                Al sinds 1888 wordt er officieus gestreden om het Nederlands kampioenschap.
                Met ingang van het seizoen 1898/'99 werd dit officieel, waarna Concordia uit Rotterdam zich als eerste landskampioen van Nederland mocht noemen.
                Na de introductie van het betaald voetbal in 1954 werd twee jaar later de Eredivisie officieel opgericht.
                Zodoende zijn sinds 1956 de sterkste clubs van Nederland verenigd in één landelijke competitie.<br />
                <Link to='/history' style={{ textDecoration: 'none' }}>
                        <span className={styles.leeshiermeer} >Lees hier meer.......</span>
                    </Link>
                </div>
                
            </div>

            <div className={styles.dezeweek} >
                <Recent />
            </div>

            <div className={styles.borderMarker2}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.stand} >
                <Stand />
            </div>

            <div className={styles.borderMarker}><img src={goal4} className={styles.ballInGoal} alt="" /></div>

            <div className={styles.allmatches}>
                <Uitslagen />
            </div>

            <div className={styles.borderMarker}><img src={goal} className={styles.ballInGoal} alt="" /></div>

            
            <Clubs />

            <div className={styles.topScores1}>
                <div className={styles.top}>Topscorers seizoen 2021-2022</div>
                <div className={styles.topScorers}>
                    <img src={haller} alt="" className={styles.top3} />
                    <div className={styles.name}>1. Sébastien Haller - Ajax</div>
                    <div className={styles.goals}>21</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={til} alt="" className={styles.top3} />
                    <div className={styles.name}>2. Guus Til - Feyenoord</div>
                    <div className={styles.goals}>15</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={karlsson} alt="" className={styles.top3} />
                    <div className={styles.name}>3. Jesper Karlsson - AZ</div>
                    <div className={styles.goals}>15</div>
                </div>
            </div>

            <div className={styles.topScores2}>
                <div className={styles.top}>Topscorers seizoen 2020-2021</div>
                <div className={styles.topScorers}>
                    <img src={vvv1} alt="" className={styles.top3} />
                    <div className={styles.name}>1. Georgios Giakoumakis - VVV-Venlo</div>
                    <div className={styles.goals}>26</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={malen} alt="" className={styles.top3} />
                    <div className={styles.name}>2. Donyell Malen - PSV</div>
                    <div className={styles.goals}>19</div>
                </div>
                <div className={styles.topScorers}>
                    <img src={berghuis} alt="" className={styles.top3} />
                    <div className={styles.name}>3. Steven Berghuis - Feyenoord</div>
                    <div className={styles.goals}>18</div>
                </div>
            </div>

            <div className={styles.borderMarker}>
                <img src={goal2} className={styles.ballInGoal} alt="" /></div>

        </>
    )
}

export default Home

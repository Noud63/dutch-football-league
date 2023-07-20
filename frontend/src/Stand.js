import React from "react";
import Loader from "./Loader";
import { useGlobalContext } from './Context';
import styles from "./styles/Stand.module.css";

const Stand = () => {
  
  const { state } = useGlobalContext();
  
  return (
    <div className={styles.container2}>

      {state.loading ? <Loader /> :

        <div className={styles.leftRightRow}>
          <div className={styles.round}>De Stand</div>

          <div className={styles.rowWrap}>

            <div className={styles.leftRow}>

              <span className={styles.left}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span >

              {state.leftRow.map((place, index) => {
                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.leftTeam}>
                      <div className={styles.position}>{index + 1}</div>
                              <img src={team.crest} alt="logo" className={styles.clubIcon} />
                      <div key={index} className={styles.team}>{team.name}</div>
                    </div>

                    <span className={styles.stats2}>
                      <span className={styles.pg}>{playedGames}</span>
                      <span className={styles.wdl2}>{won}|{draw}|{lost}</span>
                      <span className={styles.points}>{points}</span>
                      <span className={styles.gfga}>{goalsFor}-{goalsAgainst}</span>
                    </span>
                  </div>
                )
              })}
            </div>

            <div className={styles.rightRow}>

              <span className={styles.right}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span >

              {state.rightRow.map((place, index) => {
                const { team, position, playedGames, won, draw, lost, points, goalsAgainst, goalsFor } = place
                // console.log(position)
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.rightTeam}>
                      <div className={styles.position2}>{index + 10}</div>
                          <img src={team.crest} alt="logo" className={styles.clubIcon} />
                      <div key={index} className={styles.team}>{team.name}</div>
                    </div>

                    <span className={styles.stats2}>
                      <span className={styles.pg}>{playedGames}</span>
                      <span className={styles.wdl2}>{won}|{draw}|{lost}</span>
                      <span className={styles.points}>{points}</span>
                      <span className={styles.gfga}>{goalsFor}-{goalsAgainst}</span>
                    </span>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default Stand;
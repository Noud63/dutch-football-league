import React from 'react'
import styles from './styles/Clubs.module.css'
import { icons } from './assets/iconArray.js'
import { names}  from './assets/iconArray.js'

const Clubs = () => {

return (
    <>
    
        <div className={styles.iconBoxWrapper}>
            <div className={styles.clubsIconWrapper}>
                <div className={styles.alleClubs}>Alle deelnemende clubs</div>
                <div className={styles.iconBox}>
                    {icons.map((icon, index) => {
                        return (
                            <div key={index} className={styles.icon}>
                                <img src={process.env.PUBLIC_URL + `/icons/${icon}`} alt="icon" className={styles.iconPng} />
                                <div className={styles.clubName}>{names[index]}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Clubs

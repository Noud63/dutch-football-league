import React from 'react'
//import { useWindowWidth } from 'react-window-size-hooks';
import styles from './styles/Footer.module.css'
import derbystar65 from './images/derbystar65.png'
import logo from './images/eredivisielogo1.png'

const Footer = () => {

    const link = "noudvandun@gmail.com"
    const link2 = <a href='https://github.com/Noud63?tab=repositories' target='_blank' rel="noreferrer" style={{ textDecoration: "none", color: "white" }}> github.com/Noud63</a>
    const link3 = <a href='http://www.noudvandun.com' target='_blank' rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>Noud van Dun</a>

    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.contact}><span className={styles.linkName}>Contact:</span><span>{link}</span></div>
                <div className={styles.contact}><span className={styles.linkName}>Website:</span><span>{link3}</span></div>
                <div className={styles.contact}><span className={styles.linkName}>Located:</span><span>Amsterdam</span></div>
                <div className={styles.contact}><span className={styles.linkName}>GitHub:</span><span>{link2}</span></div>
            </div>
            <div className={styles.logo} ><img src={logo} alt="" className={styles.erelog} /></div>
            <div className={styles.derbystar} ><img src={derbystar65} alt="" style={{ width: '100px', height: 'auto' }} /></div>
        </div>
    )
}

export default Footer

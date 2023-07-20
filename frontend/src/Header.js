import React from 'react'
import styles from './styles/Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {

    const [scrolled, setScrolled] = React.useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(false);
        }
        else {
            setScrolled(true);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={scrolled ? styles.header : styles.header + ' ' + styles.scrolled}>

            <div className={styles.eredivisie}>KNVB Eredivisie 2023-2024</div>

            <div className={styles.links}>

                <Link to="/" className={styles.link}>
                    <div>Home</div>
                </Link>

                <Link to="/uitslagen" className={styles.link}>
                    <div >Wedstrijden</div>
                </Link>

                <Link to="/recent" className={styles.link}>
                    <div >Recent</div>
                </Link>

                <Link to='/stand' className={styles.link}>
                    <div >Stand</div>
                </Link>

            </div>

        </div>
    )
}

export default Header

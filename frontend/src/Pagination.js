import React from 'react'
import styles from './styles/Pagination.module.css'

const Pagination = ({ state, currentDay, totalMatches, setCurrentDay, setMatchDays }) => {

    const paginate = (number) => {
        setCurrentDay(number)
        setMatchDays(state.matchByDay[number - 1])
    };

    const pageNumbers = []
    for (let i = 1; i <= totalMatches; i++) {
    pageNumbers.push(i)
    }

return (
        <div className={styles.pagination}>
            <div className={styles.buttonNumbers}>
                {pageNumbers.map((number) => {
                    return (number === currentDay) ? 
                           <button type={styles.button} key={number} onClick={() => paginate(number)} className={styles.btn + " " + styles.active}>{number}</button> :
                           <button type={styles.button} key={number} onClick={() => paginate(number)} className={styles.btn}>{number}</button>
                }
                )}
            </div>
        </div>
    )
}

export default Pagination

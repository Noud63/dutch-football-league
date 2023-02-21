// import React, { useCallback, useState } from 'react'
// import styles from './styles/AdBlockDetector.module.css'

// const AdBlockDetector = () => {

//     const [addblock, setAdblock] = useState(false)

//     const showNotification = () => {
//         setAdblock(true)
//     }

//     const checkAdBlocker = useCallback(() => {
//         try {
//             fetch(
//                 new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
//                     method: 'HEAD',
//                     mode: 'no-cors'
//                 })).catch(error => {
//                     showNotification()
//                 });
//         } catch (e) {
//             // Request failed, likely due to ad blocker
//             showNotification()
//         }
//     }, [])

//     React.useEffect(() => {
//         checkAdBlocker();
//     }, [checkAdBlocker])

//     return (
//         <>
//             { addblock ? <div className={styles.adBlockDetector}>
//                 <div className={styles.text}><span>For optimal user experience,</span><span>Please disable adBlock!</span></div>
//             </div > : ""}
//         </>
//     )
// }

// export default AdBlockDetector

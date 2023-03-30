import React, { useEffect, useState } from 'react'

import styles from  '../../CSS/Toast/toast.module.css'
import close from '../../Images/cancel.png'
import error from '../../Images/cross-circle.png'
import warning from '../../Images/shield-exclamation.png'
import success from '../../Images/badge-check.png'

const Toast = (props) => {

    const[toast, setToast] = useState(true)
    const[data, setData] = useState({
        color: '',
        heading: '',
        message: '',
        logo: '',
        timeStamp: '',
    })

    const toaster = (code) => {
        if(code >= 200 && code <= 208){ return { heading: 'Success', color: '#0AAF00', logo: success }} 
        else if(code >= 400 && code <= 511){ return { heading: 'Error', color: '#C20000', logo: error} }
        else { return { heading: 'Warning', color: '#ECC205', logo: warning } }
    }

    useEffect(() => {

        if(data.timeStamp !== props.toastData.timeStamp){
            const response = toaster(props.toastData.code)

            setData({
                color: response.color,
                heading: response.heading,
                message: props.toastData.message,
                logo: response.logo,
                timeStamp: props.toastData.timeStamp
            })
            setToast(true)
        }
        
        const timer = setTimeout(() => {
            setToast(false)
        }, 3000);
        return () => clearTimeout(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    const toastToggleHandler = () => {
        setToast(false)
    }

    return (
        <div className={`${styles.toast__container}`} style={{border: "2px solid " + data.color, display: toast ? "flex" : "none" }}>
            <img className={`${styles.logo}`} src={data.logo} alt="logo" />
            <div className={`${styles.information}`}>
                <h3 style={{color: data.color}}>{data.heading}</h3>
                <p>{data.message}</p>
            </div>
            <img className={`${styles.close}`} src={close} alt="close" onClick={toastToggleHandler}/>
        </div>
    )
}

export default Toast
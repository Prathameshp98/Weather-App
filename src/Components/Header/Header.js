import React, { useState } from 'react'

import styles from '../../CSS/Header/header.module.css'

import logo from '../../Images/sun.webp'
import list from '../../Images/menu.webp'
import close from '../../Images/close.webp'

const Header = () => {

    const[menu, setMenu] = useState(false)

    const menuHandler = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className={`${styles.header}`}>
                <div className={`${styles.header__content}`}>
                    <div className={`${styles.header__content__inner}`}>
                        <img src={logo} alt="logo" />
                        <h1>Weather Reporter</h1>
                    </div>
                    <img onClick={menuHandler} src={list} alt="menu" />
                </div>
            </div>
            <div className={`${styles.menu}`} style={{display: menu ? 'flex' : 'none'}}>
                <div className={`${styles.menu__head}`}>
                    <div className={`${styles.menu__branding}`}>
                        <img src={logo} alt="logo" />
                        <p>Weather Reporter</p>
                    </div>
                    <img onClick={menuHandler} src={close} alt="close" />
                </div>
                <div className={`${styles.list} ${styles.first__list}`}>
                    <p>Temperature</p>
                    <p>Air Quality</p>
                    <p>Winds</p>
                    <p>Humidity</p>
                </div>
                <div className={`${styles.list}`}>
                    <p>News</p>
                    <p>Health & Activities</p>
                    <p>Vedio</p>
                    <p>Podcasts</p>
                    <p>Radars & Maps</p>
                </div>
            </div>
        </>
        
    )
}

export default Header

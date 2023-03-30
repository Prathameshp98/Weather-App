import React, { useState } from 'react'

import styles from '../../CSS/Footer/footer.module.css'

import arrow from '../../Images/arrow.webp'

const dropdown = [
    {
        id: 1,
        name: 'ABOUT US',
        options: ['About Weather Reporter', 'Digital Advertising', 'Press', 'Contact Us']
    },
    {
        id: 2,
        name: 'PRODUCTS & SERVICES',
        options: ['For Business', 'For Partners', 'For Advertising', 'Podcast']
    },
    {
        id: 3,
        name: 'MORE',
        options: ['Business', 'HealthCare', 'Severe Weather', 'Weather News', 'Travel']
    }
]

const Footer = () => {

    const[dropdowns, setDropdowns] = useState([false, false, false])

    const clickHandler = (number) => {
        console.log(number)
        if(number === 1){ setDropdowns([!dropdowns[0], dropdowns[1], dropdowns[2]]) }
        if(number === 2){ setDropdowns([dropdowns[0], !dropdowns[1], dropdowns[2]]) }
        if(number === 3){ setDropdowns([dropdowns[0], dropdowns[1], !dropdowns[2]]) }
    }

    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.dropdown}`}>
                {dropdown.map(each => {
                    return (
                        <div key={Math.random()} className={`${styles.each__dropdown}`}>
                            <div onClick={() => clickHandler(each.id)} className={`${styles.dropdown__head}`}>
                                <h2>{each.name}</h2>
                                <img src={arrow} alt="" />
                            </div>    
                            
                            <div className={`${styles.dropdown__options}`} style={{display: dropdowns[each.id - 1] ? 'flex' : 'none'}}>
                                {each.options.map(option => {
                                    return (
                                        <p key={Math.random()}>{option}</p>
                                    )
                                })}
                            </div>    
                        </div>
                    )
                })}
            </div>
            <div className={`${styles.social}`}>
                <svg data-src="/images/socialicons/facebook.svg" className="social-icon" alt="Social Icon" width="32" height="32" viewBox="0 0 36 36"><g fillRule="nonzero" fill="none"><path d="M20.8 5.069c-9.946 0-11.514 4.3-11.514 14.247 0 8.092-1.997 5.082 5.346 7.352C16.315 27.188 16.145 36 18 36c1.72 0 3.383-.24 4.957-.69 2.408-.688 4.466-4.135 6.173-10.342 1.644-2.179 2.466-4.696 2.466-7.55 0-9.947-.85-12.35-10.796-12.35Z" fill="#FFF"></path><path d="M18 0C8.053 0 0 8.053 0 18c0 9.893 7.987 17.933 17.867 18V23.653h-4.16V18.84h4.16v-3.547c0-4.12 2.52-6.36 6.186-6.36 1.76 0 3.267.134 3.707.187v4.307h-2.547c-2 0-2.386.946-2.386 2.346v3.067H27.6l-.627 4.813h-4.146v11.694C30.427 33.227 36 26.267 36 18c0-9.947-8.053-18-18-18Z" fill="#4167B2"></path></g></svg>
                <svg data-src="/images/socialicons/twitter.svg" className="social-icon" alt="Social Icon" width="32" height="32" viewBox="0 0 36 36"><g fillRule="nonzero" fill="none"><path d="M18 0C8.053 0 0 8.053 0 18s8.053 18 18 18 18-8.053 18-18S27.947 0 18 0Z" fill="#1DA1F3"></path><path d="M26.904 14.316c.012.183.012.376.012.57 0 5.774-4.294 12.448-12.14 12.448a11.96 11.96 0 0 1-6.538-1.96c.33.046.672.058 1.014.058a8.424 8.424 0 0 0 5.296-1.868c-1.868-.034-3.44-1.298-3.987-3.04.262.056.524.079.798.079.387 0 .763-.057 1.127-.16-1.947-.398-3.428-2.163-3.428-4.293v-.057c.581.33 1.23.524 1.936.547a4.417 4.417 0 0 1-1.902-3.645c0-.797.205-1.549.581-2.198 2.107 2.654 5.25 4.385 8.792 4.567a4.717 4.717 0 0 1-.114-.99c0-2.415 1.914-4.374 4.26-4.374 1.23 0 2.335.535 3.109 1.378a8.26 8.26 0 0 0 2.71-1.06 4.3 4.3 0 0 1-1.879 2.415A8.4 8.4 0 0 0 29 12.05c-.535.877-1.264 1.64-2.096 2.266Z" fill="#FFF"></path></g></svg>
            </div>
            <hr />
            <div className={`${styles.copyright}`}>
                <p>
			        © 2023 Weather Reporter, Inc. "Weather Reporter" and sun design are registered trademarks of Weather Reporter, Inc. All Rights Reserved.
		        </p>
                <h6>
                    Terms of Use | Privacy Policy | Cookie Policy
                </h6>
            </div>
        </div>
    )
}

export default Footer

import React, { useEffect, useState } from 'react'

import weatherAPI from '../../Utils/API/weather'

import styles from '../../CSS/Result/result.module.css'

const Result = () => {

    // eslint-disable-next-line no-unused-vars
    const[location, setLocation] = useState({
        latitude: null,
        longitude: null
    })
    const[currentTime, setCurrentTime] = useState(null)
    const[locationData, setLocationData] = useState({
        data: null,
        icon: null,
        quality: null
    })


    const airQualityFinder = (air) => {
        if(air >= 10000){ return 'Good' }
        else if(air >= 5000){ return 'Moderate' }
        else if(air >= 4000) { return 'Poor' }
        else if(air >= 2000) { return 'Haze' }
        else if(air >= 1000) { return 'Fog' }
        else if(air >= 200) { return 'Thick Fog' }
        else if(air >= 0) { return 'Dense Fog' }
    }


    useEffect(() => {

        (async () => {

            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12
            minutes = minutes < 10 ? '0'+minutes : minutes
            var strTime = hours + ':' + minutes + ' ' + ampm
            setCurrentTime(strTime)

            navigator.geolocation.getCurrentPosition(async function(position) {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.latitude
                })
                const result = await weatherAPI.getDataByCoordinates(process.env.REACT_APP_API_KEY, position.coords.latitude, position.coords.longitude)
                const air = airQualityFinder(result.data.visibility)
                setLocationData({
                    data: result.data,
                    icon: "https://openweathermap.org/img/wn/" + result.data.weather[0].icon + "@2x.png",
                    quality: air
                })
                console.log(result.data)
            });    
            
        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {locationData.data &&
                <div className={`${styles.result}`}>
                    <div className={`${styles.result__inner}`}>

                        <h3>CURRENT WEATHER</h3>
                        <p>{currentTime}</p>

                        <div className={`${styles.result__inner__top}`}>
                            <div className={`${styles.temperature}`}>
                                <img src={locationData.icon} alt="icon" />
                                <div className={`${styles.temperature__inner}`}>
                                    <h2><span>{locationData.data.main.temp}</span> &#8451;</h2>
                                    <p>RealFeel <span>{locationData.data.main.feels_like}</span> &#8451;</p>
                                </div>
                            </div>
                        </div> 

                        <div className={`${styles.result__inner__bottom}`}>
                            <div className={`${styles.air}`}>
                                <p>Air Quality</p> 
                                <h6>{locationData.quality}</h6>
                            
                            </div>
                            <div className={`${styles.air}`}>
                                <p>Wind</p>
                                <h6>{locationData.data.wind.speed} m/s</h6>
                            </div>
                            <div className={`${styles.air}`}>
                                <p>Wind Gusts</p>
                                <h6>{locationData.data.wind.gust} m/s</h6> 
                            </div> 
                        </div>
                    </div>
                </div>
            } 
        </>    
    )
}

export default Result

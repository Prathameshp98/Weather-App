import React, { useEffect, useState } from 'react'

import weatherAPI from '../../Utils/API/weather'
import CommonFunc from '../../Utils/Func/common'

import styles from '../../CSS/Search Result/search-result.module.css'

const SearchResult = (props) => {

    const[currentTime, setCurrentTime] = useState(null)
    const[locationSearchData, setlocationSearchData] = useState({
        data: null,
        icon: null,
        quality: null
    })

    useEffect(() => {

        (async () => {
            if(props.searchPlace){

                const result = await weatherAPI.getDataByPlace(process.env.REACT_APP_API_KEY, props.searchPlace)
                if(result.cod === 200){
                    const air = await CommonFunc.airQualityFinder(result.visibility)
                    const time = await CommonFunc.timeFinder()
                    setCurrentTime(time)
                    setlocationSearchData({
                        data: result,
                        icon: "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
                        quality: air
                    })
                    console.log(result) 
                } else {
                    console.log("Something went wrong")
                }
                
            } 
        })();

    }, [props.searchPlace])

    return (
        <>
            {locationSearchData.data &&
                <div className={`${styles.search__result}`}>
                    <div className={`${styles.result__inner}`}>

                        <h3>Weather At {locationSearchData.data.name}</h3>
                        <p>{currentTime}</p>

                        <div className={`${styles.result__inner__top}`}>
                            <div className={`${styles.temperature}`}>
                                <img src={locationSearchData.icon} alt="icon" />
                                <div className={`${styles.temperature__inner}`}>
                                    <h2><span>{locationSearchData.data.main.temp}</span> &#8451;</h2>
                                    <p>RealFeel <span>{locationSearchData.data.main.feels_like}</span> &#8451;</p>
                                </div>
                            </div>
                        </div> 

                        <div className={`${styles.result__inner__bottom}`}>
                            <div className={`${styles.air}`}>
                                <p>Air Quality</p> 
                                <h6>{locationSearchData.quality}</h6>
                            
                            </div>
                            <div className={`${styles.air}`}>
                                <p>Wind</p>
                                <h6>{locationSearchData.data.wind.speed} m/s</h6>
                            </div>
                            <div className={`${styles.air}`}>
                                <p>Wind Gusts</p>
                                <h6>{locationSearchData.data.wind.gust} m/s</h6> 
                            </div> 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SearchResult

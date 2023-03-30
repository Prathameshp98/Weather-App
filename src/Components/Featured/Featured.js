import React, { useEffect, useState } from 'react'

import Picker from '../../Utils/Picker/Picker'

import weatherAPI from '../../Utils/API/weather'
import CommonFunc from '../../Utils/Func/common'

import styles from '../../CSS/Featured/featured.module.css'

const Featured = () => {

    const[nationalLocationData, setNationalLocationData] = useState([])
    const[internationalLocationData, setInternationalLocationData] = useState([])

    useEffect(() => {

        (async () => {
            const national = await Picker.nationalLocationPicker()
            const international = await Picker.internationalLocationPicker()

            setNationalLocationData([])
            setInternationalLocationData([])

            national.forEach(async(each) => {
                const result = await weatherAPI.getDataByPlace(process.env.REACT_APP_API_KEY, each.name)
                if(result.cod === 200){
                    const air = await CommonFunc.airQualityFinder(result.visibility)
                    const newData = { data: result, icon: "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png", quality: air, image: each.url }
                    setNationalLocationData(prev => {
                        return [...prev, newData]
                    })
                } else {
                    console.log("Something went wrong with ", each.name)
                }
            })

            international.forEach(async(each) => {
                const result = await weatherAPI.getDataByPlace(process.env.REACT_APP_API_KEY, each.name)
                if(result.cod === 200){
                    const air = await CommonFunc.airQualityFinder(result.visibility)
                    const newData = { data: result, icon: "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png", quality: air, image: each.url }
                    setInternationalLocationData(prev => {
                        return [...prev, newData]
                    })
                } else {
                    console.log("Something went wrong with ", each.name)
                }
            })

        })();

    }, [])

    return (
        <div className={`${styles.featured}`}> 
            <h2>Featured</h2>
            {nationalLocationData.length &&
                <div className={`${styles.container__group}`}>
                    <h3>National</h3>
                    {nationalLocationData.map((eachData, index) => {
                        return (
                            <div key={Math.random()} className={`${styles.container}`}>
                                <img className={`${styles.place__img}`} src={eachData.image} alt="place" />

                                <div className={`${styles.information}`}>
                                    <p className={`${styles.city__name}`}>{eachData.data.name}</p>
                                    <div className={`${styles.result__inner__top}`}>
                                        <div className={`${styles.temperature}`}>
                                            <img src={eachData.icon} alt="icon" />
                                            <div className={`${styles.temperature__inner}`}>
                                                <h2><span>{eachData.data.main.temp}</span> &#8451;</h2>
                                                <p>RealFeel <span>{eachData.data.main.feels_like}</span> &#8451;</p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className={`${styles.result__inner__bottom}`}>
                                        <div className={`${styles.air}`}>
                                            <p>Air Quality</p> 
                                            <h6>{eachData.quality}</h6>
                                        </div>
                                        <hr />
                                        <div className={`${styles.air}`}>
                                            <p>Wind</p>
                                            <h6>{eachData.data.wind.speed} m/s</h6>
                                        </div>
                                        <hr />
                                        <div className={`${styles.air}`}>
                                            <p>Precipitation</p>
                                            <h6>{eachData.data.main.humidity} %</h6> 
                                        </div> 
                                    </div>
                                </div>   

                            </div>
                        )
                    })}
                </div>
            }
            {internationalLocationData.length &&
                <div className={`${styles.container__group}`}>
                    <h3>International</h3>
                    {internationalLocationData.map((eachData, index) => {
                        return (
                            <div key={Math.random()} className={`${styles.container}`}>
                                <img className={`${styles.place__img}`} src={eachData.image} alt="place" />

                                <div className={`${styles.information}`}>
                                    <p className={`${styles.city__name}`}>{eachData.data.name}</p>
                                    <div className={`${styles.result__inner__top}`}>
                                        <div className={`${styles.temperature}`}>
                                            <img src={eachData.icon} alt="icon" />
                                            <div className={`${styles.temperature__inner}`}>
                                                <h2><span>{eachData.data.main.temp}</span> &#8451;</h2>
                                                <p>RealFeel <span>{eachData.data.main.feels_like}</span> &#8451;</p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className={`${styles.result__inner__bottom}`}>
                                        <div className={`${styles.air}`}>
                                            <p>Air Quality</p> 
                                            <h6>{eachData.quality}</h6>
                                        </div>
                                        <hr />
                                        <div className={`${styles.air}`}>
                                            <p>Wind</p>
                                            <h6>{eachData.data.wind.speed} m/s</h6>
                                        </div>
                                        <hr />
                                        <div className={`${styles.air}`}>
                                            <p>Precipitation</p>
                                            <h6>{eachData.data.main.humidity} %</h6> 
                                        </div> 
                                    </div>
                                </div>   

                            </div>
                        )
                    })}
                </div>
            }   
        </div>
        
    )
}

export default Featured

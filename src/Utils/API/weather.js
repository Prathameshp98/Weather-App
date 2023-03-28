import axios from "axios"

const getDataByCoordinates = async(key, latitude, longitude) => {
    
    return await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`,
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err
    })
}

const getDataByPlace = async(key, place) => {
    return await axios({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}&units=metric`,
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err
    })
}


const weatherAPI = {
    getDataByCoordinates,
    getDataByPlace
}

export default weatherAPI


const airQualityFinder = async(air) => {
    if(air >= 10000){ return 'Good' }
    else if(air >= 5000){ return 'Moderate' }
    else if(air >= 4000) { return 'Poor' }
    else if(air >= 2000) { return 'Haze' }
    else if(air >= 1000) { return 'Fog' }
    else if(air >= 200) { return 'Thick Fog' }
    else if(air >= 0) { return 'Dense Fog' }
}

const timeFinder = async() => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0'+minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
}


const CommonFunc = {
    airQualityFinder,
    timeFinder
}

export default CommonFunc
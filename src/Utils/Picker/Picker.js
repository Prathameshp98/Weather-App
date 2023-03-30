

import Cities from "./Cities"

const nationalLocationPicker = async() => {
    var arr = []
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 19)
        if(arr.indexOf(r) === -1) arr.push(r)
    }
    
    return [Cities.national[arr[0]], Cities.national[arr[1]], Cities.national[arr[2]]]
}

const internationalLocationPicker = async() => {
    var arr = []
    while(arr.length < 3){
        var r = Math.floor(Math.random() * 21)
        if(arr.indexOf(r) === -1) arr.push(r)
    }
    return [Cities.international[arr[0]], Cities.international[arr[1]], Cities.international[arr[2]]]
}


const Picker = {
    nationalLocationPicker,
    internationalLocationPicker
}

export default Picker
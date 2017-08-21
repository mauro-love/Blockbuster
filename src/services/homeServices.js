import axios from 'axios'

import Api from '../api'

function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.homeBannerApi}__t=${new Date().getTime()}`)
        .then((response)=>{
            // console.log(response.data.data.billboardsse);
            resolve(response.data.data.billboards);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
function getHotMovies(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.hotMoviesApi}&__t=${new Date().getTime()}`)
        .then((response)=>{
            // console.log(response.data.data.films);
            resolve(response.data.data.films);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
function getCommingShow(){
    return new Promise((resolve,reject)=>{
        axios.get(`${Api.commingShowApi}&__t=${new Date().getTime()}`)
        .then((response)=>{
            // console.log(response.data.data.films);
            resolve(response.data.data.films);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}

export default {
    getHomeBanner,
    getHotMovies,
    getCommingShow
}
import axios from 'axios'

import Api from '../api'

function getCommingSoonApi(){
    return new Promise((resove,reject)=>{
        axios.get(Api.commingSoonApi)
        .then((response)=>{
            console.log(response);
            resove(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
function getNowPlayingApi(){
    return new Promise((resove,reject)=>{
        axios.get(Api.nowPlayingApi)
        .then((response)=>{
            console.log(response);
            resove(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}
export default {
    getCommingSoonApi,
    getNowPlayingApi
}
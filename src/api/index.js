// 轮播图数据
const homeBannerApi = '/v4/api/billboard/home?'//__t=1503104959935
//热门电影
const hotMoviesApi = '/v4/api/film/now-playing?page=1&count=5'  //&__t=1503111791648
//即将上映
const commingShowApi = '/v4/api/film/coming-soon?page=1&count=3'  //&__t=1503111791651
//电影正在上映
const nowPlayingApi = '/v4/api/film/now-playing?page=1&count=7'
//电影即将上映
const commingSoonApi = '/v4/api/film/coming-soon?page=1&count=7'


export default {
    homeBannerApi,
    hotMoviesApi,
    commingShowApi,
    nowPlayingApi,
    commingSoonApi
}
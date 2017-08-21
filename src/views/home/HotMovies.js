import React,{Component} from 'react'

export default class HotMovies extends Component {
    render(){
        return(
            <div class = "hot-movies">
                {
                    !(this.props.hotData == null)?(this.props.hotData.map((item,index)=>{
                        return (
                            <dl key = {index} class="hot-movies-list">
                                <dt>
                                    <img src={item.cover.origin} class = "hot-movies-img"/>
                                </dt>
                                <dd class="hot-movies-describe">
                                    <h3>{item.name}</h3>
                                    <p>
                                       {item.cinemaCount}家影院上映
                                       {item.watchCount}人购票
                                    </p>
                                    <span>
                                        {item.grade}
                                    </span>
                                </dd>
                            </dl>
                        )
                    })):''
                }
                <div class="home-more">
                    <span>更多热映电影</span>
                </div>
            </div>
        )
    }
}
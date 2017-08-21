import React, {Component} from 'react'

// 引入组件
import Slider from '../../views/home/Slider.js'
import HotMovies from '../../views/home/HotMovies.js'
import CommingShow from '../../views/home/CommingShow.js'

//引入数据
import homeServices from '../../services/homeServices.js'
//引入样式
import '../../css/home.css'
let homeScroll;
export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData:[],
			hotData:[],
			commingData:[]
		}
	}
	render(){
		return (
			<div class="page wrapper">
				<div class= "scroller">
					<Slider bannerData={this.state.bannerData}/>
					<HotMovies hotData={this.state.hotData}/>
					<CommingShow commingData={this.state.commingData}/>
				</div>
			</div>
		)
	}
	componentWillMount(){
		//获取轮播图
		homeServices.getHomeBanner()
		.then((data)=>{
			this.setState({bannerData:data})
		})
		//获取热门电影数据
		homeServices.getHotMovies()
		.then((data)=>{
			this.setState({hotData:data})
		})
		//获取即将上映数据
		homeServices.getCommingShow()
		.then((data)=>{
			this.setState({commingData:data})
		})
	}
	componentDidMount(){
		homeScroll = new IScroll(".wrapper");
		homeScroll.refresh();
	}
	componentDidUpdate(){
		homeScroll.refresh();
	}
	
}
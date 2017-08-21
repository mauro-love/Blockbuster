import React, {Component} from 'react'
//引入组件
import MoviesList from '../../views/movies/MoviesList.js'

//引入数据
import moviesServices from '../../services/moviesServices.js'
//引入样式
import '../../css/movies.css'
export default class Movies extends Component{
	constructor(){
		super();
		this.state = {
			commingData : [],
			nowPlayingData:[],
			moviesTitle:[
				{title:"正在热映",id:0},
				{title:"即将上映",id:1}
			],
			currentIndex:0
		}
	}
	render(){
		return (
			<div class="movies page">
				<ul class = "movies-bar-title">
					{
						this.state.moviesTitle.map((item,index)=>{
							var tabStyle=item.id==this.state.currentIndex ? 'subActive' : '';
							return(
								<li key={index} onClick={this.toggle.bind(this,index)} class ={`movies-bar-list ${tabStyle}`}>
									{item.title}
								</li>
							)
						})
					}
				</ul>
				<MoviesList nowPlayingData={this.nowPlayingData.bind(this)}/>
				{
					this.state.commingData.map((item,index)=>{
						return(
							<div key={index}>{item.name}</div>
						)
					})
				}
				{
					this.state.nowPlayingData.map((item,index)=>{
						return(
							<div key={index}>{item.name}</div>
						)
					})
				}
			</div>
		)
	}
	componentWillMount(){
		moviesServices.getCommingSoonApi()
		.then((data)=>{
			this.setState({commingData:data})
		})
		moviesServices.getNowPlayingApi()
		.then((data)=>{
			this.setState({nowPlayingData:data})
		})
	}
	toggle(index){
		console.log(index);
		this.setState({currentIndex:index})
	}
}
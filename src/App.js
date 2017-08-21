import React, {Component} from 'react'  	//引入react
import {BrowserRouter,Route} from 'react-router-dom'     //引入路由

import AppHeader from './views/common/AppHeader.js'	 	//引入头部
import SilderBar from './views/common/SilderBar.js'     //引入侧边栏

import Home from './pages/home/Home.js'		//引入页面
import Movies from './pages/movies/Movies.js'
import Cinema from './pages/cinema/Cinema.js'
import Shop from './pages/shop/Shop.js'
import Me from './pages/me/Me.js'
import Card from './pages/card/Card.js'
import City from './pages/city/City.js'

import './css/app.css' //引入css

export default class App extends Component{ 
	constructor(){
		super();
		this.state={
			showBar:false,
			headerTitle: '卖座电影'
		}
	}
	render(){
		return(
			<BrowserRouter>	
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					<Route path='/' render={({history,location})=>{
						return (
							<SilderBar  history={history}
										pathname= {location.pathname}
										show= {this.state.showBar}
										hideHandle= {this.menuHandle.bind(this)}/>
						)
					}

					}/>
					

					<Route path='/' exact component = {Movies}/>
					<Route path='/me' component = {Me}/>
					<Route path='/city-list' exact component = {City}/>
					<Route path='/movies' component = {Movies}/>
					<Route path='/cinema' component = {Cinema}/>
					<Route path='/shop' component = {Shop}/>
					<Route path='/card' component = {Card}/>
				</div>
			</BrowserRouter>	
		)
		
	}
	menuHandle(headerTitle){
		this.setState({showBar:!this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
		
	}
}












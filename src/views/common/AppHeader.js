import React , {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AppHeader extends Component{
	render(){
		return (
			<div class = "app-header">
				<span class = "iconfont icon-daohang" onClick={this.menuAction.bind(this)}></span>
				<h1 class = "title">{this.props.title}</h1>
				<Link to="/city-list" class= "city iconfont icon-arrow-bottom">深圳</Link>
				<Link to="/me" class = "iconfont icon-touxiang"></Link>
			</div>
		)
	}
	menuAction(){
		this.props.menuHandle();
	}
}

import React ,{Component} from 'react'
import menu from '../../services/silderBarInfo.js'   //引入导航数据


export default class SilderBar extends Component {
	render(){
		let sliderBarShow = {
			transform: this.props.show?"none":"translateX(-100%)"
		}
		let coverStyle ={
			background: this.props.show?"rgba(0,0,0,0.5)":"rgba(0,0,0,0)",
			display: this.props.show?"block" : "none"
		}
		let data = this.props.pathname === '/shop' ? menu.shopSilderBarData:menu.homeSilderBarData;
		return(
			<div class="menu-wrap">
				<div class="cover" style={coverStyle}></div>
				<div class= "menu-list" style={sliderBarShow}>
					{
						data.map((item,index)=>{
							return(
								<a key = {index} onClick= {this.goPage.bind(this,item)}>
									{item.title}
									<span class="iconfont icon-fanhui-copy-copy"></span>
								</a>
							)
						})
					}
					
				</div>
			</div>
		)
	}
	goPage(item){
		console.log(item);
		this.props.history.push(item.path);
		this.props.hideHandle(item.header);
	}
}
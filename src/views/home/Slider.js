import React,{Component} from 'react'


let bannerSwiper = null;
export default class Slider extends Component {
    render(){

        return(
            <div class="swiper-container">
                <div class="swiper-wrapper">
                   {!(this.props.bannerData ==null)? (this.props.bannerData.map((item,index)=>{
                        return(
                                <div key={index} class="swiper-slide">
                                    <img src={item.imageUrl} />
                                </div>
                        )
                    })):''
                }
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        bannerSwiper.update();
    }
    componentDidMount(){
        bannerSwiper = new Swiper ('.swiper-container', {
            loop: true
            
          })        
    }
}
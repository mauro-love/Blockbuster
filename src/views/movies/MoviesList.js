import React,{Component} from 'react'

export default class MoviesList extends Component{
    render(){
        rerturn(
            <div>
                {this.props.nowPlayingData.map((item,index)=>{
                        return(
                           item.name
                        )
                    })
                }
            </div>
        )
    }
}
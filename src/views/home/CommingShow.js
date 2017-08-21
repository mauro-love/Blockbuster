import React,{Component} from 'react'

export default class CommingShow extends Component {
    render(){
        function formatDate(now) { 
            var year=now.getYear(); 
            var month=now.getMonth()+1; 
            var date=now.getDate(); 
            return month+"月"+date+"日"; 
            } 
        return(
            <div class = "comming-show">
                <div class= "comming-show-title">
                    即将上映
                </div>
            {
                !(this.props.commingData == null)?(this.props.commingData.map((item,index)=>{
                    return (
                        <dl key = {index} class="comming-show-list">
                            <dt>
                                <img src={item.cover.origin} class = "comming-show-img"/>
                            </dt>
                            <dd class="comming-show-describe">
                                <h3>{item.name}</h3>
                                <span>
                                {
                                    formatDate(new Date(item.premiereAt))
                                }
                                上映
                                </span>
                            </dd>
                        </dl>
                    )
                })):''
            }
                <div class="home-more">
                    <span>更多即将上映电影</span>
                </div>                
            </div>
        )
    }
    componentDidUpdate(){
        // homeScroll.refresh();
    }
}
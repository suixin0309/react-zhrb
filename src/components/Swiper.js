import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import LinesEllipsis from 'react-lines-ellipsis'
import 'swiper/dist/css/swiper.min.css'
import '../static/css/SwiperComponent.css'


class SwiperComponent extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        new Swiper(this.swiperID, {
            // loop: true, // 循环模式选
            autoplay:true,
            pagination: {
                el: this.paginateID,
                clickable: true,
            },
        });


    }
    renderList(){

        const list=this.props.list
        return(
            list.map(n=> <li className='swiper-slide' onClick={()=>console.log(n)} key={n}>
                <img alt='缩略图' src={n} />
                <LinesEllipsis className='swiperfix' text='轮播的标题标题标题标题标题标题标题标题吧标题标题标题hahshdhdhdshdshds' maxLine={2}
                               ellipsis='...' trimRight basedOn='letters' />
                {/*<div className='swiperfix' style={{"WebkitBoxOrient": "vertical"}}>*/}
                    {/*轮播的标题标题标题标题标题标题标题标题吧标题标题标题hahshdhdhdshdshds*/}
                {/*</div>*/}
            </li>)

        )
    }
    render() {
        const items = this.renderList()
        return (
            <div className="wxchat-banner">
                <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
                    <ul className="swiper-wrapper">
                        {items}
                    </ul>

                    <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
                </section>
            </div>
        )
    }
}
export default SwiperComponent
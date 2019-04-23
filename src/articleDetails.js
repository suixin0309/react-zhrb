import React, {Component} from 'react';
import LinesEllipsis from 'react-lines-ellipsis'

import swiper1 from './static/img/swiper1.jpeg'
import HeaderComponent from './components/HeaderComponent'

import './static/css/common.css'
import './static/css/SwiperComponent.css'
import StarRate from '@material-ui/icons/StarRate'

const banner = {
    position: "relative",
}

class articleDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: {},
            params : {
                "isShow": false,
                "name": "articleDetails",
                "content": {"onStar":this.onStar},
                "onStar": false,
                "father": this.props
            }
        }
    }

    componentWillMount() {
        const search = this.props.location.search
        const id = Number(search.split('?')[1])
        const _this = this
        fetch(`http://hn.algolia.com/api/v1/items/${id}`)
            .then(response => response.json())
            .then(result => (
                _this.setState({content: result})
            ))
            .catch(e => e)
    }

    onStar = () => {
        const _this=this
        console.log("dfdf")
        if(this.state.params.onStar){
            this.setState({
                params : {
                    "isShow": false,
                    "name": "articleDetails",
                    "content": {"onStar":_this.onStar},
                    "onStar": false,
                    "father": this.props
                }})
        }
        else{
            this.setState({
                params : {
                    "isShow": false,
                    "name": "articleDetails",
                    "content": {"onStar":_this.onStar},
                    "onStar": true
                }})
        }
    }

    render() {
        const {content,params}=this.state
        return (
            <div>
                <HeaderComponent params={params}/>
                <div style={{position: "relative"}}>
                    <img src={swiper1} style={{width: '100%'}} alt=""/>
                    <LinesEllipsis className='swiperfix' text={content.title} maxLine={2}
                                   ellipsis='...' trimRight basedOn='letters' />
                </div>
                <div className='bg-white'>
                    {content.title}
                </div>
            </div>

        )
    }

}

export default articleDetails
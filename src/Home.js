
import React, { Component } from 'react';

import HeaderComponent from './components/HeaderComponent'
import AlignItemsList from './components/AlignItemsList'
import SwiperComponents from './components/Swiper'
import 'swiper/dist/css/swiper.min.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import small1 from './static/img/small.jpeg';
import small2 from './static/img/small2.jpeg';

import './App.css';
import './static/css/SwiperComponent.css';
import swiper1 from "./static/img/swiper1.jpeg";
import swiper2 from "./static/img/swiper2.jpeg";
import swiper3 from "./static/img/swiper3.jpeg";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
};


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null,
            left: false,
            swiperList:[],
            ItemsList:[],
            ImgsList:[],
            search:''
        };
    }
    componentWillMount() {
        this.setState({
            ImgsList:[small1,small2],
            swiperList: [swiper1, swiper2, swiper3]
        })
        let _this=this
        fetch('https://hn.algolia.com/api/v1/search?query=foo&tags=story')
            .then(response => response.json())
            .then(result => (
                _this.setState({ItemsList:result.hits})
            ))
            .catch(e => e);
    }

    toggleDrawer = open => () => {
        this.setState({
            left: open,

        });
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { classes } = this.props;
        const {ImgsList,ItemsList,swiperList}=this.state
        const obj= {
            "ItemsList": ItemsList,
            "ImgsList":ImgsList,
            "father":this.props
        }
        const params={
            "isShow":true,
            "name":"home",
            "content":[],
            "father":this.props
        }
        return (
            <div className={classes.root}>
                <HeaderComponent params={params}/>
                <SwiperComponents list={swiperList}  />
                <AlignItemsList list={obj}/>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

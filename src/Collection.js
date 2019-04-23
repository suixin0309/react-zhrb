import React, {Component} from 'react';

import HeaderComponent from './components/HeaderComponent'
import AlignItemsList from './components/AlignItemsList'
import 'swiper/dist/css/swiper.min.css'

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import small1 from './static/img/small.jpeg';
import small2 from './static/img/small2.jpeg';

import './static/css/SwiperComponent.css';

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


class Collection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            left: false,
            ItemsList: [],
            ImgsList: [],
            search: ''
        };
    }

    componentWillMount() {
        this.setState({
            ImgsList: [small1, small2],
        })
        let _this = this
        fetch('https://hn.algolia.com/api/v1/search?query=foo&tags=story')
            .then(response => response.json())
            .then(result => (
                _this.setState({ItemsList: result.hits})
            ))
            .catch(e => e);
    }

    toggleDrawer = open => () => {
        this.setState({
            left: open,

        });
    };
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {classes} = this.props;
        const {ImgsList, ItemsList} = this.state
        const obj = {
            "ItemsList": ItemsList,
            "ImgsList": ImgsList,
            "father": this.props
        }
        const params = {
            "isShow": true,
            "name": "Collection",
            "content": {
                "total": 22
            },
            "father": this.props
        }
        return (
            <div className={classes.root}>
                <HeaderComponent params={params}/>
                <AlignItemsList list={obj}/>
            </div>
        );
    }
}

Collection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Collection);

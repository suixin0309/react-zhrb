
import React, { Component } from 'react';

import HeaderComponent from './components/HeaderComponent'
import 'swiper/dist/css/swiper.min.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import avatar from './static/img/1.jpg'


import './static/css/SwiperComponent.css';
import {Link} from "react-router-dom";

const styles = {
    root: {
        width: '100%',
        flexGrow: 1,
        backgroundColor:'#fff'
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
        width: 80,
        height: 80,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
};


class Collection extends Component {
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null,
            left: false,
            user:{},
            edit:false,
            params:{
                "isShow":true,
                "name":"User",
                "content":{
                },
                "onEdit":false,
                "father":this.props
            }
        };
    }
    componentWillMount() {
        let _this=this
        fetch('http://hn.algolia.com/api/v1/users/xinxin')
            .then(response => response.json())
            .then(result => (
                _this.setState({user:result})
            ))
            .catch(e => e);
    }
    componentDidMount() {
        console.log(this)
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
    onEdit =()=>{
        if(this.state.params.onEdit){
            this.setState({ params:{
                    "isShow":true,
                    "name":"User",
                    "content":{
                    },
                    "onEdit":false,
                    "father":this.props
                }  });
        }
        else{
            this.setState({ params:{
                    "isShow":true,
                    "name":"User",
                    "content":{
                    },
                    "onEdit":true,
                    "father":this.props
                }  });
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <HeaderComponent params={this.state.params} onClick={this.onEdit}/>
                <div>
                    <Grid style={{fontSize:'1.2rem',color:'#999'}} container spacing={16}>
                        <Grid container justify="center" alignItems="center" item xs={12}>
                            <Avatar alt="Remy Sharp" src={avatar} className={this.props.classes.avatar}/>
                        </Grid>
                        <Grid className='user-name' container justify="center" alignItems="center" item xs={12}>
                            <Divider style={{width:'50%'}} />
                        </Grid>

                        <Grid className='user-name' container justify="center" alignItems="center" item xs={12}>
                            {this.state.params.onEdit?
                                <TextField
                                    id="outlined-disabled"
                                    defaultValue="Hello World"
                                    className={classes.textField}
                                />:
                                <TextField
                                    disabled
                                    id="outlined-disabled"
                                    defaultValue="Hello World"
                                    className={classes.textField}
                                />}
                        </Grid>
                        <Grid className='user-name' container justify="center" alignItems="center" item xs={12}>
                            <Divider style={{width:'50%'}} />
                        </Grid>

                        <Grid container justify="center" alignItems="center" item xs={12}>
                            <Link to='/Collection'>我的收藏</Link>

                        </Grid>
                        <Grid className='user-name' container justify="center" alignItems="center" item xs={12}>
                            <Divider style={{width:'50%'}} />
                        </Grid>
                        <Grid container justify="center" alignItems="center" item xs={12}>
                            <Button variant="outlined" color="secondary" className={classes.button}>
                                登出
                            </Button>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }
}

Collection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Collection);

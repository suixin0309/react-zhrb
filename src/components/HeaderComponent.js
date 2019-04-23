
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import 'swiper/dist/css/swiper.min.css'
import '../static/css/HeaderComponent.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace'
import Edit from '@material-ui/icons/Edit'
import Done from '@material-ui/icons/Done'
import StarRate from '@material-ui/icons/StarRate'

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../App.css';
import '../static/css/SwiperComponent.css';
import avatar from '../static/img/1.jpg'

import blue from "@material-ui/core/es/colors/blue";

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
        width: 60,
        height: 60,
    },
    bigAvatar: {
        margin: 10,
        width: 80,
        height: 80,
    },
};


class ButtonAppBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null,
            left: false
        };
    }

    toggleDrawer = open => () => {
        this.setState({
            left: open
        });
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    onEdit = () =>{
        this.props.onClick()
    }
    render() {

        const { classes ,params} = this.props;
        const { anchorEl} = this.state;
        let ImageAvatars=(
            <Grid style={{backgroundColor:'#3f51b5',color:'#fff', fontSize:'1rem'}} container spacing={16}>
                <Grid container justify="flex-start" alignItems="flex-start" item xs={4}>
                    <Link to='/User'>
                        <Avatar alt="Remy Sharp" src={avatar} className={this.props.classes.avatar}/>
                    </Link>
                </Grid>
                <Grid className='user-name' container justify="flex-start" alignItems="center" item xs={6}>
                    隋鑫DAAI
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={6}>
                    <Link to='/Collection'>我的收藏</Link>

                </Grid>
                <Grid container justify="center" alignItems="center" item xs={6}>
                    <InboxIcon />离线
                </Grid>
            </Grid>
        )
        const sideList = (
            <div className={classes.list}>
                {ImageAvatars}
                <List>
                    {['我的首页'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <Link to='/'>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        const mapName={
            "articleDetails":"",
            "home":"首页",
            "Collection":"条收藏",
            "User":"个人主页"
        }
        const mapIcon={
            "articleDetails":<KeyboardBackspace />,
            "home":<MenuIcon />,
            "Collection":<MenuIcon />,
            "User":<MenuIcon />,
        }
        const star=params.content.onStar
        const mapIconList={
            "articleDetails": <div><StarRate style={params.onStar?{color:'#ffa742'}:{color:'#fff'}}onClick={()=>{star()}}/></div>,
            "home":<MoreIcon  aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}/>,
            "Collection":<MoreIcon  aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}/>,
            "User": params.onEdit?<Done onClick={this.onEdit} />:<Edit onClick={this.onEdit} />,
        }
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {params.isShow?
                            <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                                {mapIcon[params.name]}
                            </IconButton>
                            :
                            <IconButton onClick={()=>params.father.history.goBack()} className={classes.menuButton} color="inherit" aria-label="Menu">
                                {mapIcon[params.name]}
                            </IconButton>}
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {params.content.total}{mapName[params.name]}
                            <div className='material-icons'></div>
                        </Typography>
                        <Button color="inherit">
                            {mapIconList[params.name]}
                        </Button>
                    </Toolbar>
                </AppBar>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                <Drawer style={{width:'80%'}} open={this.state.left} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer( false)}
                        onKeyDown={this.toggleDrawer( false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

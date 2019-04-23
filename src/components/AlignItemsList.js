import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    a:{
        outline: 'none',
        color: 'inherit'
    }
});
// @withRouter
class AlignItemsList extends Component {
    constructor(props){
        super(props)
        this.toDetails=this.toDetails.bind(this)
    }
    toDetails(id){
        const {father} = this.props.list;
        const url='/articleDetails?'+id
        return function(){
            father.history.push(url)
        }
    }
    render() {
        const { classes} = this.props;
        const { ImgsList,ItemsList } = this.props.list;
        return (
            <List className={classes.root} style={{maxWidth: '2000px'}}>
                {ItemsList.map(n=>
                    <ListItem onClick={this.toDetails(n.objectID)} key={n.objectID} alignItems="flex-start">
                        <ListItemText
                            primary={n.title}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        Ali Connors
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={ImgsList[0]} />
                        </ListItemAvatar>

                    </ListItem>

                )}

            </List>
        );
    }
}

AlignItemsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
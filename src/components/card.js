import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grow from '@material-ui/core/Grow';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  card: {
    maxWidth: 400,
    backgroundColor: 'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PostCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elevation: 2
    };
  }

  changeElevation = (elevation) => {
    this.setState({ elevation });
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        style={{ cursor: 'pointer' }}
        onMouseOver={() => this.changeElevation(10)}
        onMouseLeave={() => this.changeElevation(2)}
      >
        <Grow in={true} timeout={1000}>
          <Card className={classes.card} raised={true} elevation={this.state.elevation}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
              </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image="https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grow>
      </div>
    );
  }
}

export default withStyles(styles)(PostCard);
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import red from '@material-ui/core/colors/red';
import Grow from '@material-ui/core/Grow';

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

class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
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
            <TextField
              placeholder="Write something here"
              id="required"
              label="Required"
              defaultValue="Hello World"
              className={classes.textField}
              margin="normal"
            />
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              {/* <FavoriteIcon /> */}
            </IconButton>
            <IconButton aria-label="Share">
              {/* <ShareIcon /> */}
            </IconButton>
          </CardActions>
        </Card>
      </Grow>
    );
  }

}

export default withStyles(styles)(NewPost);
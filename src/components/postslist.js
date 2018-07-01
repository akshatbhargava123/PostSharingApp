import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import PostCard from './card';

class PostsList extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={16}
        style={{ marginTop: 16 }}
      >
        <Grid item>
          { this.props.firstCard() }
        </Grid>
        <Grid item>
          <PostCard />
        </Grid>
        <Grid item>
          <PostCard />
        </Grid>
        <Grid item>
          <PostCard />
        </Grid>
        <Grid item>
          <PostCard />
        </Grid>
      </Grid>
    );
  }
}

export default PostsList;
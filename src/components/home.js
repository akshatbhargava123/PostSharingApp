import React, { Component } from 'react';

import Header from './header';
import NewPost from './newpost';
import PostsList from './postslist';

class Home extends Component {

  constructor(props) {
    super(props);
    let curTab = 0;
    if (this.props.location.pathname == '/write') curTab = 1;
    this.state = {
      currenTab: curTab 
    };
  }

  handleTabChange = (e, v) => {
    this.setState({ currenTab: v });
  }

  render() {
    return (
      <div>
        <Header onTabChange={this.handleTabChange} tabIndex={this.state.currenTab} />
        {this.state.currenTab == 0 ? (
          <div>
            <PostsList firstCard={() => <NewPost />} />
          </div>
        ) : (
          <NewPost />
        )}
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
  
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ paddingRight: 20 }}>
              PostBook
            </Typography>
            <Tabs
              value={this.props.tabIndex}
              onChange={this.props.onTabChange}
              centered
            >
              <Tab label="Home" />
              <Tab label="Write" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
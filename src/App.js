import React, { Component } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router'

import Login from './components/login';
import Home from './components/home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user_id') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

class App extends Component {

  constructor(props) {
    super(props);
    localStorage.setItem('user_id', 123)
    this.state = {
      userLoggedIn: localStorage.getItem('user_id')
    };
  }

  render() {
    return (
      <div style={{ margin: 0 }}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
        <Redirect strict from="/" to="/home" />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);

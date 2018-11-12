import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const msp = state => {
  return { loggedIn: Boolean(state.session.id) };
};

const Auth = ({component: Component, path , loggedIn, exact}) => {
  return (
    <Route path={path} exact={exact}
      render={(props) => {
        if (loggedIn) {
          return (<Redirect to='/' />);
        } else {
          return (<Component {...props} />);
        }
      }
    }/>
  );
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));

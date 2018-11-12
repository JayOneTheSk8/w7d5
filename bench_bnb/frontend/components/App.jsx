import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import { AuthRoute } from '../util/route_util.jsx';

const App = () => {
  return (
    <>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute exact path="/signup" component={SignUpForm} />
      <AuthRoute exact path="/login" component={LoginForm} />
    </>
  );
};

export default App;

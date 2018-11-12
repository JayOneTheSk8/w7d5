import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>

      <Route path="/signup" component={SignUpForm} />
      <Route path="/login" component={LoginForm} />
    </>
  );
};

export default App;

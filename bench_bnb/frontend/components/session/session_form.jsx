import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    if (this.props.errors.length === 0) { return; }
    const allErrors = this.props.errors.map(error => {
      return (<li>{error}</li>);
    });
    return (
      <ul>
        {allErrors}
      </ul>
    );
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <>
        <h2>{this.props.formType === 'signup' ? "Sign Up" : "Log In"}</h2>

        {this.renderErrors()}

        <Link to={this.props.formType === 'signup' ? '/login' : '/signup'}>
          {this.props.formType === 'signup' ? "Log In" : "Sign Up"}
        </Link>

        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type='text' onChange={this.update('username')} value={this.state.username}/>
          </label>

          <label>Password:
            <input type='password' onChange={this.update('password')} value={this.state.password}/>
          </label>

          <input type='submit' value='Submit'/>
        </form>
      </>
    );
  }
}

export default SessionForm;

import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <>
          <h2>Hello {this.props.currentUser.user.username}!</h2>
          <button onClick={this.props.logout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
          <Link to='/signup'>Sign Up</Link>
          <Link to='login'>Login</Link>
        </>
      );
    }
  }
}

export default Greeting;

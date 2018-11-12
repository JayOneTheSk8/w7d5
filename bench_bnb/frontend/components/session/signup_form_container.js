import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

const msp = (state) => {
  return {
    errors: [],
    formType: 'signup',
    loggedIn: Boolean(state.session.currentUserId)
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);

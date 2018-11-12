import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

const msp = (state) => {
  return {
    errors: [],
    formType: 'login',
    loggedIn: Boolean(state.session.currentUserId)
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);

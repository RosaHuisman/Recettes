import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { login, changeFieldValue, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  hasError: state.user.loginError,
  password: state.user.password,
  email: state.user.email,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // onSubmitForm: () => {
  //   dispatch(login());
  // },
  changeField: () => {
    console.log('changeField')
    // dispatch(changeFieldValue())
  },
  handleLogin: () => {
    console.log("handleLogin");
    dispatch(login());
  },
  handleLogout: () => {
    console.log('handleLogout');
    dispatch(logout())
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

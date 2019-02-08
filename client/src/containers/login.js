import { connect } from 'react-redux';
import Login from '../components/Login';
import { LoginUser } from '../actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  LoginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

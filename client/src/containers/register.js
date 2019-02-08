import { connect } from "react-redux";
import Register from "../components/Register";
import { RegisterUser } from "../actions";

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  RegisterUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

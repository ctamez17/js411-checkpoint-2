import { connect } from "react-redux";
import App from "../components/login";
import { loginUser } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);

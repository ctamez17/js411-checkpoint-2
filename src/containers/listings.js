import { connect } from "react-redux";
import listings from "../components/listings";
import { removeBiz } from "../redux/actions"

const mapStateToProps = (state) => {
  return { biz: state.biz };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBiz: (index) => dispatch(removeBiz(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(listings);

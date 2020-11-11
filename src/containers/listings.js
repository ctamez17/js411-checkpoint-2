import { connect } from "react-redux";
import listings from "../components/listings";

const mapStateToProps = (state) => {
  return {
    biz: state.biz,
  };
};

export default connect(mapStateToProps)(listings);

import { connect } from "react-redux";
import details from "../components/details";

const mapStateToProps = (state) => {
  return { biz: state.biz };
};

export default connect(mapStateToProps)(details);

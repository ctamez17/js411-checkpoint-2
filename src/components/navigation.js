import React, { Component, Fragment } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// Import { Link } here //
import { Link } from "react-router-dom";
import handleLogin from "../containers/handleLogin";

class navigation extends Component {
  render() {
    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Small Business App
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/"> Home </Link>
            </li>
            {/* <handleLogin /> */}
            <li className="nav-list-item">
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

export default navigation;

import React from "react";
import { Button } from "@material-ui/core";

const defaultUser = {
  username: false,
  password: false,
};

const handleLogin = (props) => {
  console.log(props);
  return("hello world")
  if (!props.user.username) {
    return (
      <a href="/login">
        <Button>Login</Button>
      </a>
    );
  } else {
    return (
      <Button onClick={() => props.logoutUser(defaultUser)}>Logout</Button>
    );
  }
};

export default handleLogin;

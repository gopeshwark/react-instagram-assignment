import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../context/UserContext";

const AuthRoute = (props) => {
  const currentUser = useContext(UserContext);
  if (currentUser) {
    <Redirect to="/" />;
  } else {
    <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute;

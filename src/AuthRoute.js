import React from "react";
import {Route, Navigate} from "react-router-dom";

export const AuthRoute = ({authenticated, component: Component, render, ...rest}) => {
    return(
      <Route {...rest} render={(props) =>
      authenticated? (render? (render(props)) : (<Component {...props} />)):
          (<Navigate to={{pathname: "/LoginForm", state:{from: props.location}}}/>)}
      />);
}
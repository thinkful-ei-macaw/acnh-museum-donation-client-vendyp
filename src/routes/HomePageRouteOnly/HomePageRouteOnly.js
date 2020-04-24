import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function HomePageRouteOnly({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Redirect
            to={{
              pathname: "/list",
              state: { from: componentProps.location },
            }}
          />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}

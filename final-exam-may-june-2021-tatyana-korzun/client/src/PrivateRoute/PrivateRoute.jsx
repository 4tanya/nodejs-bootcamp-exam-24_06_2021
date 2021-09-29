import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Layout from "../Layout";

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          <Layout>{children}</Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

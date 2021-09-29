import { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import authContext from "../context/authContext";

function ProvideAuth({ children }) {
  const [user, setUser] = useState(authContext.user);
  const [token, setToken] = useState(authContext.token);
  const value = { user, setUser, token, setToken };

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <authContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </authContext.Provider>
  );
}

export default ProvideAuth;

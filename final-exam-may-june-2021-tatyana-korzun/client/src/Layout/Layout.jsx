import { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

function Layout({ children }) {
	const classes = useStyles();

  return (
    <Fragment>
		<CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Electro cars</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>{children}</Container>
    </Fragment>
  );
}

export default Layout;

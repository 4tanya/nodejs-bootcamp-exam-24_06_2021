import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginService from "./LoginService";
import {
  Card,
  Button,
  TextField,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import useStyles from "./useStyles";

function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const { setUser, setToken } = useAuth();
  const service = new LoginService();

  const { control, handleSubmit } = useForm();

  const login = async ({ email, password }) => {
    const {
      data: user,
      headers: { token },
    } = await service.login({
      email,
      password,
    });

    setUser(user);
    setToken(token);
    history.push("/home");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardHeader title="Sign in" />
        <CardContent>
          <form onSubmit={handleSubmit(login)} className={classes.form}>
            <Controller
              name="email"
              control={control}
              defaultValue={"some@maail.com"}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField {...field} type="email" label="Email" />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField {...field} type="password" label="Password" />
              )}
            />
            <Button color="primary" type="submit" className={classes.button}>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;

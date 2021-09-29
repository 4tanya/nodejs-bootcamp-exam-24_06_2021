import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "auto",
    minHeight: "100vh",
    backgroundImage:
      'url("https://cdn.motor1.com/images/mgl/OWjvo/s1/2020-chevy-corvette-stingray-feature.jpg")',
  },
  card: {
    minWidth: 300,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  button: {
    marginTop: "1rem",
  },
});

export default useStyles;

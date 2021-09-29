import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import HomeService from "./HomeService";
import useAuth from "../hooks/useAuth";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

function HomePage() {
  const history = useHistory();
  const classes = useStyles();
  const { token } = useAuth();
  const service = new HomeService();
  const [cars, setCars] = useState([]);

  const { control, handleSubmit } = useForm();

  const onSubmit = async ({ brand }) => {
    const { data } = await service.searchCars(brand, token);
    setCars(data);
  };

  const addCar = () => history.push("/add-car");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Input {...field} className={classes.searchInput} />
          )}
        />
        <Button color="primary" type="submit">
          Search
        </Button>
        <Button color="primary" onClick={addCar}>
          Add car
        </Button>
      </form>

      <div>
        {cars.map(({ _id, brand, model, imageRef, engine }) => (
          <Card className={classes.root} key={_id}>
            <CardHeader title={brand} subheader={model} />
            <CardMedia
              className={classes.media}
              image={imageRef}
              title={imageRef}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Charging level: {engine?.charging_level}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hybrid: {engine?.hybrid?.toString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SaveFormService from "./SaveFormService";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import useAuth from "../hooks/useAuth";
import useStyles from "./useStyles";

function SaveFormPage() {
  const history = useHistory();
  const classes = useStyles();
  const { token } = useAuth();
  const service = new SaveFormService();
  const [engines, setEngines] = useState([]);

  const { register, control, handleSubmit } = useForm();

  const init = async () => {
    const { data } = await service.getEngines(token);
    setEngines(data);
  };

  const onSubmit = async ({
    brand,
    model,
    imageRef,
    engineId = engines[0]?._id,
  }) => {
    await service.saveCar({ brand, model, imageRef, engineId }, token);
    history.push("/home");
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="brand"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => <TextField {...field} label="Brand" className={classes.field} />}
        />
        <Controller
          name="model"
          control={control}
          render={({ field }) => <TextField {...field} label="Model" className={classes.field} />}
        />
        <Controller
          name="imageRef"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Image Reference" className={classes.field} />
          )}
        />

        <Controller
          name="imageRef"
          control={control}
          render={({ field }) => (
            <FormControl className={classes.field}>
              <InputLabel htmlFor="charging_level">Charging level</InputLabel>
              <Select
                value={engines[0]?._id}
                inputProps={{
                  name: "charging_level",
                  id: "charging_level",
                }}
              >
                {engines.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.charging_level}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Button color="primary" type="submit">
          Add car
        </Button>
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="brand" {...register("brand", { required: true })} />
        <input type="model" {...register("model")} />
        <input type="imageRef" {...register("imageRef")} />
        <select {...register("engineId")}>
          {engines.map((item) => (
            <option key={item._id} value={item._id}>
              {item.charging_level}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form> */}
    </div>
  );
}

export default SaveFormPage;

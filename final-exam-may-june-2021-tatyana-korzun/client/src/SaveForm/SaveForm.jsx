import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SaveFormService from "./SaveFormService";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
  const [engineSelected, setEngineSelected] = useState(null);

  const { control, handleSubmit } = useForm();

  const init = async () => {
    const { data } = await service.getEngines(token);
    setEngineSelected(data[0]?._id);
    setEngines(data);
  };

  const handleChangeEngine = event => {
    setEngineSelected(event.target.value);
  };

  const onSubmit = async ({
    brand,
    model,
    imageRef,
    engineId = engineSelected,
  }) => {
    await service.saveCar({ brand, model, imageRef, engineId }, token);
    history.push("/home");
  };

  useEffect(() => {
    init();
  }, []);

  return engines.length && (
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
          name="engineId"
          control={control}
          render={({ field }) => (
            <FormControl className={classes.field}>
              <InputLabel htmlFor="engineId">Charging level</InputLabel>
              <Select
                {...field}
                value={engineSelected}
                onChange={handleChangeEngine}
                inputProps={{
                  id: "engineId",
                }}
              >
                {engines.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.charging_level}
                  </MenuItem>
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

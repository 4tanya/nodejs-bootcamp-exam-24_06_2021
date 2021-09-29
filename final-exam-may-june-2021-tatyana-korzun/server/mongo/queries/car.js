const { CarModel } = require("../models");
const { findById, update: updateEngine } = require("./engine");
const { getHashKey, setHashKey, delHashKey } = require("../../redis/queries");

const storeCar = async ({ brand, model, imageRef, engineId }) => {
  const engine = await findById(engineId);

  const car = await save({
    brand,
    model,
    imageRef,
    engineId: engine._id, // assign the _id from the engine
  });

  await updateEngine(engine.id, { cars: [...engine.cars, car] });

  return car;
};

const save = async ({ brand, model, imageRef, engineId }) => {
  try {
    const car = new CarModel({
      brand,
      model,
      imageRef,
      engine: engineId, // assign the _id from the client
    });

    delHashKey('cars', brand);

    return await car.save();
  } catch (err) {
    console.error(err);
  }
};

const populate = async (brand) => {
  const promise = new Promise((resolve, reject) => {
    CarModel.find({ brand })
      .populate({ path: "engine", select: ["charging_level", "hybrid"] })
      .exec(function (err, car) {
        if (err) return console.error(err);
        console.log(`The car is %s`, car);
        resolve(car);
      });
  });

  return await promise;
};

const getByBrand = async (brand) => {
	try {
	  const cached = await getHashKey('cars', brand);
  
	  if (cached) {
      console.log("cached result");
    
      return cached;
	  }
  
	  const results = await populate(brand);
  
    setHashKey('cars', brand, results);
    
    console.log(results);
  
	  return results;
	} catch (err) {
	  console.error(err);
	}
};

module.exports = {
  save,
  populate,
  storeCar,
  getByBrand,
};

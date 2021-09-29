const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const { EngineModel } = require("../models");
const { getKey, setKey, delKeys } = require("../../redis/queries");

const getAll = async () => {
	try {
		const result = await EngineModel.find({});
		return result;
	} catch (err) {
		console.error(err);
	}
}

const findById = async (id) => {
  try {
    const result = await EngineModel.findOne({ _id: ObjectId(id) });

    if (!result) {
      // 404 error
      console.error(404);

      return;
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

const save = async ({ charging_level, hybrid }) => {
  try {
    const item = new EngineModel({
      _id: new mongoose.Types.ObjectId(),
      charging_level,
      hybrid,
    });
    const result = await item.save();

    if (!result) {
      // 500 error
      console.error(500);

      return;
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

const update = async (id, data) => {
  try {
    const result = await EngineModel.updateOne(
      { _id: ObjectId(id) },
      data
    );

    if (!result) {
      // 404 error
      console.error(404);

      return;
    }

    delKeys([id]);

    return result;
  } catch (err) {
    console.error(err);
  }
};

const populate = async (id) => {
  const promise = new Promise((resolve, reject) => {
    EngineModel.findOne({ _id: ObjectId(id) })
      .populate({
        path: "cars",
        select: ["brand", "model", "imageRef"],
      })
      .exec(function (err, item) {
        if (err) return console.error(err);
        console.log("The cars are %s", item.cars);
        resolve(item);
      });
  });

  return await promise;
};

const getById = async (id) => {
	try {
	  const cached = await getKey(id);
  
	  if (cached) {
      console.log("cached result");
    
      return cached;
	  }
  
	  const result = await populate(id);
  
	  setKey(id, result);
  
	  return result;
	} catch (err) {
	  console.error(err);
	}
};

module.exports = {
  save,
  findById,
  getById,
  populate,
  update,
  getAll,
};

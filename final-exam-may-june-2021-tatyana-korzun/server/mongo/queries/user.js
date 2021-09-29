const mongoose = require("mongoose");
const { UserModel } = require("../models");

const findByEmail = async (email) => {
  try {
    const result = await UserModel.findOne({ email });

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

const save = async ({ email, name, password }) => {
  try {
    const user = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      email,
      name,
      password,
    });
    const result = await user.save();

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

const getUser = async ({ email, name, password }) => {
  try {
    const result = await findByEmail(email);

    if (!result) {
      const user = await save({ email, name, password });

      return user;
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  save,
  findByEmail,
  getUser,
};

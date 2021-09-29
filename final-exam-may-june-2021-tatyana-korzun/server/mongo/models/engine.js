const { Schema } = require("mongoose");
const mongoose = require("../connection");

const engineSchema = Schema({
  _id: Schema.Types.ObjectId,
  charging_level: { type: Number, required: true },
  hybrid: { type: Boolean, required: true },
  cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
});

const Engine = mongoose.model("Engine", engineSchema);

module.exports = Engine;

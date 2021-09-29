const { Schema } = require("mongoose");
const mongoose = require("../connection");

const carSchema = Schema({
  brand: {
    type: String,
    required: true,
  },
  model: { type: String },
  imageRef: { type: String },
  engine: { type: Schema.Types.ObjectId, ref: 'Engine' },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

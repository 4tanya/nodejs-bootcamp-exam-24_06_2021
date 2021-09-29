const bcrypt = require("bcrypt");
const { Schema } = require("mongoose");
const mongoose = require("../connection");

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique : true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
})
.pre('save', function(next) {
  const user = this;
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

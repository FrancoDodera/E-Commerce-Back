const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  tokenAuth: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: true
  },
  type: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

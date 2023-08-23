const mongoose = require("mongoose");

const brandModel = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Brand = mongoose.model("Brand", brandModel);

module.exports = Brand;


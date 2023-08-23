const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  amount: {
    Number,
  },
  id_category: {
    String,
  },
  id_brand: {
    String,
  },
  name: {
    String,
  },
  color: [String],
  price: {
    Number,
  },
  status: {
    String,
  },
  description: [String],
  image: String,
  active: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const { Router } = require("express");
const {
  getAllProducts,
} = require("../../controllers/products/productsController");
const app = Router();

app.get("/", getAllProducts);

module.exports = app;

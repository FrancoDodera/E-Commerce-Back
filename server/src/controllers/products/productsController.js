const data = require("../../fake-api");
const ProductModel = require("../../models/ProductModel");
const CategoryModel = require("../../models/CategoryModel");
const BrandModel = require("../../models/BrandModel");

const cleanArray = async (products) => {
  const updateProducts = [];
  await Promise.all(
    products.map(async (product) => {
      const category = await CategoryModel.findById(product.idCategory);
      const brand = await BrandModel.findById(product.idMarca);
      const updateProduct = {
        id: product.id,
        amount: product.amount,
        id_category: {
          id: category.idCategory,
          name: category.name,
        },
        id_brand: {
          id: brand.id,
          name: brand.name,
        },
        name: product.name,
        color: product.color,
        price: product.price,
        status: product.status,
        description: product.description,
        image: product.image,
        active: product.active,
      };
      updateProduct.push(updateProducts);
    })
  );
  return updateProducts;
};

const setCarsBDD = async () => {
  const result = await ProductModel.insertMany(data);
  return result;
};

const getAllProducts = async () => {
  const products = await ProductModel.find();
  if (products.length > 0) {
    const updateProducts = await cleanArray(products);
    return updateProducts;
  }
  const result = await setCarsBDD();
  const updateResults = await cleanArray(result);
  return updateResults;
};

module.exports = {
  getAllProducts,
};

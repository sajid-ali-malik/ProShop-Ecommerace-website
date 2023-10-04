import asyncHandler from "../middlewares/asyncHandler";
import Product from "../models/productModel";

// @desc GET ALL PRODUCTS
// @route /api/products
// @access PUBLIC

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc GET A PRODUCT
// @route /api/products/:id
// @access PUBLIC

const getProductById = asyncHandler(async (req, res) => {
  const product = Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

export { getProducts, getProductById };

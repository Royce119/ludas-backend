const express = require("express");
const productsRouter = express.Router();
const { getAllProducts, postProduct } = require("./products.controller");
//Get All Products
productsRouter.get("/products", getAllProducts);

//Post Product
productsRouter.post("/products", postProduct);
module.exports = productsRouter;

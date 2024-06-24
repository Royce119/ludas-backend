const Product = require("../../models/product");
async function getAllProducts(req, res, next) {
  if (req.query) {
    try {
      const products = await Product.find(req.query);
      if (!products) {
        res.status(400).json({ message: "not found" });
      }
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const products = await Product.find();
      if (!products) {
        res.status(400).json({ message: "not found" });
      }
      res.status(200).json({ data: products });
    } catch (error) {
      next(error);
    }
  }
}
//
//
async function postProduct(req, res, next) {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
}
//
//

module.exports = { getAllProducts, postProduct };

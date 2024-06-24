const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title_img: {
    type: String,
    required: false,
  },
  short_description: {
    type: String,
    required: true,
  },
  long_description: {
    type: String,
    required: true,
  },
  products_page_description: {
    type: [String],
    required: true,
  },
  product_page_description: {
    type: [String],
    required: true,
  },
  price_before: {
    type: Number,
  },
  price_after: {
    type: Number,
    required: true,
  },
  nutrition_facts: {
    type: {},
    required: true,
  },
  home_pic: {
    type: String,
    required: true,
  },
  product_page_pics: {
    type: [String],
  },
  background_pic: {
    type: String,
  },
  cart_pic: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Product", ProductSchema);

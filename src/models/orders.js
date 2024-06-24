const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrdersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: false,
  },
  apartment: {
    type: String,
    default: false,
  },
  city: {
    type: String,
    default: false,
  },
  governrate: {
    type: String,
    default: false,
  },
  postal_code: {
    type: String,
    default: false,
  },
  phone: {
    type: String,
    default: false,
  },
  order: {
    type: Array,
    required: true,
  },
  time: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: "pending",
  },
});
module.exports = mongoose.model("Orders", OrdersSchema);

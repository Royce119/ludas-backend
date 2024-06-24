const mongoose = require("mongoose");
const { Schema } = mongoose;
const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact_method: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    contacted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Message", MessageSchema);

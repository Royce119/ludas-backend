const express = require("express");
const {
  putOrder,
  getOrder,
  postOrder,
  deleteOrder,
} = require("./orders.controller");
const { verifyUser, verifyAdmin } = require("../../utils/verifyToken");
const ordersRouter = express.Router();

ordersRouter.post("/orders", postOrder);
ordersRouter.get("/orders", verifyAdmin, getOrder);
ordersRouter.put("/orders", verifyAdmin, putOrder);
ordersRouter.delete("/orders", verifyAdmin, deleteOrder);

module.exports = ordersRouter;

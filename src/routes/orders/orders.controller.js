const Orders = require("../../models/orders");
const postOrder = async (req, res, next) => {
  const newOrder = new Orders(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({ message: "Order has been placed !" });
  } catch (error) {
    next(error);
  }
};
const getOrder = async (req, res, next) => {
  try {
    const orders = await Orders.find({});

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
const putOrder = async (req, res, next) => {
  const { _id, ...order } = req.body;
  try {
    const updated = await Orders.findOneAndUpdate({ _id: _id }, order, {
      new: true,
    });
    res.status(204).json(updated);
  } catch (error) {
    next(error);
  }
};
const deleteOrder = async (req, res, next) => {
  const { _id } = req.body;

  try {
    const updated = await Orders.findOneAndDelete({ _id: _id });
    res.status(202).json({ message: "Order deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { postOrder, putOrder, getOrder, deleteOrder };

const Message = require("../../models/message");
const postMessage = async (req, res, next) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
  }
};
module.exports = { postMessage };

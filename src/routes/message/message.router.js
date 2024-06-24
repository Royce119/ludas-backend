const express = require("express");
const messagesRouter = express.Router();
const { postMessage } = require("./message.controller");
//Get All Products
messagesRouter.post("/messages", postMessage);

module.exports = messagesRouter;

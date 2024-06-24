const express = require("express");
const emailRouter = express.Router();
const { postEmail, getEmails } = require("./email.controller");
const { verifyToken } = require("../../utils/verifyToken");
//Get All Products
emailRouter.get("/subscription", getEmails);
//Post Product
emailRouter.post("/subscription", verifyToken, postEmail);
module.exports = emailRouter;

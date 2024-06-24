const express = require("express");
const productsRouter = require("./routes/products/products.router");
const cors = require("cors");
const emailRouter = require("./routes/email/email.router");
const messagesRouter = require("./routes/message/message.router");
const authRouter = require("./routes/auth/auth.router");
const cookieParser = require("cookie-parser");
const ordersRouter = require("./routes/orders/orders.router");
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://ludas-icecream.vercel.app",
      "https://ludas-icecream.vercel.app/login",
    ],
    credentials: true, //i
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(emailRouter);
app.use(productsRouter);
app.use(messagesRouter);
app.use(ordersRouter);
app.use(authRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = app;

const jwt = require("jsonwebtoken");
const createError = require("./error");
const verifyToken = (req, res, next) => {
  // const token = req.cookies.access_token;
  // /.substring(7, authHeader.length)
  const token = req.headers.authorization; // cloud
  console.log(token);
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }
  //user is our info inside the token {id , isadmin}
  jwt.verify(token, process.env.JWT, (err, user) => {
    console.log(err);
    if (err) {
      return next(createError(403, "Invalid token"));
    }
    //We changed our request user to the user in the token
    req.user = user;
    next();
  });
};
const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.name === req.params.name) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.admin === true) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};
module.exports = { verifyToken, verifyUser, verifyAdmin };

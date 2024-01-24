const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.uid;

    if (!token) {
      return res.status(401).json({ msg: "Login required" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ msg: "Login required" });
    }

    req.id = decodedToken.id;
    console.log("authMiddleware");
    next();
  } catch (err) {
    console.log("authMiddleware catch block");
    res.status(404).json({
      Error: err.message,
    });
  }
};

exports.authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    const userId = req.id;
    const user = await User.findOne({ _id: userId });
    console.log("roles");
    if (!roles.includes(user.role)) {
      throw new Error(
        `Role ${user.role} is not allowed to accessed this resource`
      );
    }
    next();
  };
};

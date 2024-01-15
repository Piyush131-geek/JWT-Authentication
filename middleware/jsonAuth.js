// middleware/jsonAuth.js

const jwt = require("jsonwebtoken");
const secretKey = "Piyush_Application";

module.exports = (req, res, next) => {
  console.log("entered in middleware");
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    console.log("entered try");
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);
    req.users = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

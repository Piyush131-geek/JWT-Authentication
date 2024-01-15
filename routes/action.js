const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/protected", (req, res) => {
  console.log("enteted");
  res.json({ message: "This is a protected route.", user: req.user });
});

module.exports = router;

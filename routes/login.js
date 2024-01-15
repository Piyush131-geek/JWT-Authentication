const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const connection = require("../db/db.js").promise(); // Use the promise interface

// Define your secret key here (replace with your actual secret key)
const secretKey = "Piyush_Application";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch user by username and password
    const [rows, fields] = await connection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    console.log(rows);
    if (rows.length === 0) {
      // User not found or invalid credentials
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Authentication successful, generate and send a JWT token
    const token = jwt.sign(
      { userid: rows[0].id, username: rows[0].username },
      secretKey,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

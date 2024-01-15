const express = require("express");
const app = express(); // Create the main app
const router = express.Router();
const jwt = require("jsonwebtoken");
const login = require("./routes/login");
const action = require("./routes/action");
const middleware = require("./middleware/jsonAuth");

app.use(express.json());

const port = 3000;
app.use("/api/v3/", middleware);

app.use("/", login);
app.use("/api/v3/", action);

// Dummy user data (in a real application, this would come from a database)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//module.exports = users;

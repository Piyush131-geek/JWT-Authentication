const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sonal@1234",
  database: "my_test",
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit based on your needs
  queueLimit: 0,
});

// The pool will emit an 'enqueue' event when a callback has been queued to wait for an available connection.

// Test the connection
connection.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");

    // Release the connection back to the pool
    //sconnection.release();
  }
});

module.exports = connection;

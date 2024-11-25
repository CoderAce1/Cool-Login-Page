const express = require("express");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (index.html, styles.css, etc.)
app.use(express.static("public"));

// Handle login request
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide both username and password." });
  }

  // Simulate successful login for any username and password
  res.json({ message: "Login successful", username });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

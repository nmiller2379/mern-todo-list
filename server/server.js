require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("./middleware/passport");
const mongoose = require("mongoose");

const app = express();

// Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

// Routes
// Simple GET route to test the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const userRoutes = require("./routes/userRoutes");
// const todoRoutes = require("./routes/todoRoutes"); // Uncomment this line when ready

app.use("/api/users", userRoutes);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

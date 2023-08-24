const express = require("express");



var cors = require("cors");

// imports routes, middleware, and configs
const todos = require("./routes/routes");
const { notFoundRoute, errorHandler } = require("./config/errorHandle");

// loads environment variables from .env file

// initializes express app
const app = express();

// application database connection establishment
const connectDatabase = require("./controllers/db.js/connect");
connectDatabase();

// corss-origin-allow-all
app.use(cors());

// sets favicon in routes


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sets default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to TODO Node.js application backend." });
});

// todos api routes
app.use("/", todos)

// 404 - not found error handler
app.use(notFoundRoute);

// error handler
app.use(errorHandler);

// app listens to defined port
app.listen(5000, () => {
  console.log("TODO-App backend server running on: " + 5000);
});
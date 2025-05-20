const express = require('express');
const configDotenv = require("dotenv").config;
const { clerkMiddleware } = require("@clerk/clerk-sdk-node");
const indexRoutes = require("./routes/index");
const cors = require("cors");

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(clerkMiddleware());
app.use(express.json());
app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "url",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to SchoolManagement database");
  })
  .catch((err) => {
    console.log("Error connecting to SchoolManagement database", err.message);
  });
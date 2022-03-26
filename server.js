require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const databaseUrl = process.env.DEV_DB;
//const databaseUrl = process.env.PROD_DB;

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to SchoolManagement database");
  })
  .catch((err) => {
    console.log("Error connecting to SchoolManagement database", err.message);
  });

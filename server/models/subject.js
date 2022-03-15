"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  subject_name: {
    type: String,
    default: "",
  },
  subject_code: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("subject", subjectSchema);

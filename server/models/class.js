"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  class_name: {
    type: String,
    default: "",
  },
  section_list: {
    section_name: {
      type: String,
      default: "",
    },
    section_id: {
      type: mongoose.Types.ObjectId,
      ref: "section",
    },
  },
});

module.exports = mongoose.model("class", classSchema);

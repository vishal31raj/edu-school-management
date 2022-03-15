"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  classTeacher: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
    default: "",
  },

  // Gragde represents the class(1,2,3,....)
  grade: {
    type: Number,
    default: -1,
  },
  section: {
    type: String,
    default: "",
  },

  // List of all students enrolled for given section
  student_list: [
    {
      student_id: {
        type: mongoose.Types.ObjectId,
        ref: "student",
      },
    },
  ],
  // subject-teacher mapping will be done here
  subject_list: [
    {
      subject_id: {
        type: mongoose.Types.ObjectId,
        ref: "subject",
      },
      subject_teacher: {
        type: mongoose.Types.ObjectId,
        ref: "teacher",
      },
    },
  ],
});
module.exports = mongoose.model("section", sectionSchema);

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstname: {
    type: String,
    default: "",
    required:true,
  },
  middlename: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  profile_image: {
    type: String,
    default: "",
  },
  contact: {
    phone_no: {
      type: Number,
      unique: true,
      default: "",
      required:true,
    },
    email: {
      type: String,
      unique: true,
      default: "",
    },
  },
  qualifications: [
    {
      feild: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
  dateOfBirth: {
    type: Date,
    default: "",
  },
  address: {
    addressLine1: {
      type: String,
      default: "",
    },
    addressLine2: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    pincode: {
      type: Number,
      default: "",
    },
  },
  assigned_class: {
    section_id: {
      type: mongoose.Types.ObjectId,
      default: "",
      ref: "SectionModel",
    },
  },
  // yet to decide
  teacher_timetable: {
    type: String,
    default: "",
  },
  subject_list: [
    {
      subject_id: {
        type: mongoose.Types.ObjectId,
        ref: "subject",
      },
      subject_name: {
        type: String,
        default: "",
      },
    },
  ],
});

module.exports = mongoose.model("Teachers", teacherSchema);

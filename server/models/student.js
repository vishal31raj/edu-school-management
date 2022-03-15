"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  // class:{}
  firstname: {
    type: String,
    default: "",
    required:true,
  },
  middlename: {
    type: String,
    default: "",
  },
  lasttname: {
    type: String,
    default: "",
  },
  profile_image: {
    type: String,
    default: "",
  },
  roll_no: {
    type: String,
    default: "",
    required:true,
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
  student_contact: {
    phone_no: {
      type: Number,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      default: "",
    },
  },
  parent_info: {
    father_info: {
      name: {
        type: String,
        default: "",
      },
      occupation: {
        type: String,
        default: "",
      },
      phone_no: {
        type: Number,
        default: "",
      },
      email: {
        type: String,
        unique: true,
        default: "",
      },
    },
    mother_info: {
      name: {
        type: String,
        default: "",
      },
      occupation: {
        type: String,
        default: "",
      },
      phone_no: {
        type: Number,
        default: "",
      },
      email: {
        type: String,
        unique: true,
        default: "",
      },
    },
  },
  dateOfBirth: {
    type: Date,
    default: "",
  },
  classRank: {
    type: Number,
    default: -1,
  },
  section_id: {
    type: mongoose.Types.ObjectId,
    ref: "SectionModel",
    required:true,
  },
  subjectList: [
    {
      subject_id: {
        type: mongoose.Types.ObjectId,
        ref: "Subjects",
      },
    },
  ],
  awardsAndAchievments: [
    {
      achievmentName: {
        type: String,
        default: "",
      },
      rank: {
        type: Number,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
    },
  ],
});

module.exports = mongoose.model("Students", studentSchema);

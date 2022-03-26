const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  school_name: {
    type: String,
    required: true,
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
  principal_details: {
    pricipal_name: {
      type: String,
      required: true,
    },
    joining_date: {
      type: Date,
      default: Date.now(),
    },
    personal_contact: {
      type: Number,
      default: "",
    },
    personal_email: {
      type: String,
      default: "",
    },
  },
  classes: [
    {
      type: mongoose.Types.ObjectId,
      ref:"class"
    },
  ],
 staff:[{
     type:mongoose.Types.ObjectId,
     ref:"teacher"
 }],
 notices:[{
     heading:{
         type:String,
         required:true
     },
     notice_subject:{
         type:String,
         default:""
     }
     ,
     body:{
         type:String,
         required:true,
     },
     issued_by:{
         name:{
             type:String,
             default:"",
         },
         designation:{
             type:String,
             default:"",
         }
     },
     issued_date:{
         type:Date,
         default:Date.now(),
     }
 }],
 school_contact:{
     phone:{
         type:String,
         default:""
     },
     email:{
         type:String,
         default:"",
     }
 },
});
module.exports = mongoose.model("school",schoolSchema);

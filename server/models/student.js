const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    // class:{}
    full_name: {
        type: String,
        default: ""
    },
    profile_image: {
        type: String,
        default: ""
    },
    roll_no: {
        type: String,
        default: ""
    },
    address: {
        addressLine1: {
            type: String,
            default: ""
        },
        addressLine2: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            default: ""
        },
        pincode: {
            type: Number,
            default: ""
        }
    },
    student_contact: {
        phone_no: {
            type: Number,
            default: ""
        },
        email: {
            type: String,
            unique: true,
            default: ""
        }
    },
    parent_info: {
        father_info: [
            {
                name: {
                    type: String,
                    default: ""
                },
                occupation:{
                    type: String,
                    default: ""
                },
                phone_no:{
                    type: Number,
                    default: ""
                },
                email:{
                    type: String,
                    unique:true,
                    default: ""
                }
            }
        ],
        mother_info:[
            {
                name: {
                    type: String,
                    default: ""
                },
                occupation:{
                    type: String,
                    default: ""
                },
                phone_no:{
                    type: Number,
                    default: ""
                },
                email:{
                    type: String,
                    unique:true,
                    default: ""
                }
            }
        ]
    },
    dateOfBirth:{
        type:Date,
        default:""
    },
    classRank:{
        type:String,
        default:""
    },
    section_id:{
        type: mongoose.Types.ObjectId,
        ref:"SectionModel"
    },
    subjectList:{
        subject_id:{
            type:mongoose.Types.ObjectId,
            ref:"Subjects"
        },
        // subject_name:{
        //     type:String,
        //     default:""
        // }
    },
    awardsAndAchievments:{
        achievmentName:{
            type:String,
            default:""
        },
        rank:{
            type:Number,
            default:""
        },
        description:{
            type:String,
            default:""
        }
    }

});

module.exports = mongoose.model("Students", studentSchema);
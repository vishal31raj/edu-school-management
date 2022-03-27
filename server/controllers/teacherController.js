const TeacherModel = require("../models/teacher")

const teacherRegister = async(req, res) =>{
    try{
        // generate unique TeacherCode

        // change name according to key
        // father/husband name
        // School parameter for ref
        const{name,dateOfBirth,phone_no,assigned_class,school,salary,adharDetails,qualifications} = req.body;
        const schoolDetails = await SchoolModel.find(school,{_id:1});
        const details = new TeacherModel({
            name : name,
            contact:phone_no,
            dateOfBirth: dateOfBirth,
            assigned_class:assigned_class,
            salary:salary,
            qualifications:qualifications,
            adhaar_num:adharDetails,
            school_id:schoolDetails._id
        });
        await details.save();
        
        return res.status(200).json({
            result:true,
            msg:"Registered Successfully",
            // data:details
        })
        
        
    }
    catch(e){
        return res.status(500).json({
            msg:"Registration Failed!",
            result:false,
        })
    }
}

const teacherInfo = async(req, res) =>{
    try{
        const {id} = req.body;
        const info = await TeacherModel.findById(id);
        if(!info){
            return res.status(404).json({
                msg:"Invalid Teacher Id",
                result:false
            });
        };
        return res.status(200).json({
            msg:"Data Fetched",
            result:true,
            data:info
        })
    }
    catch(e){
        return res.status(500).json({
            msg:"Unable to fetch data",
            result:false,
        })
    }
};

module.exports = {
    teacherInfo,
    teacherRegister
};
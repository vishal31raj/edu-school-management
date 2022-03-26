const StudentModel = require("../models/student");

const studentInfo = async(req, res) =>{
    try{
        const {id} = req.body;
        const info = await StudentModel.findById(id);
        if(!info){
            return res.status(404).json({
                msg:"Invalid Student Id",
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

// Have to  change according to different schools
const studentRank = async(req, res) =>{
    try{
        const {id} = req.body;
        const studRank = await StudentModel.findById(id,{
            student_class_rank:1,
            student_section_rank:1
        });
    
        if(!studRank){
            return res.status(404).json({
                msg:"Invalid Student Id",
                result:false
            });
        };
    
        return res.status(200).json({
            msg:"Data Fetched",
            result:true,
            data:studRank
        });
    }
    catch(e){
        return res.status(500).json({
            msg:"Unable to fetch data",
            result:false,
        })
    }
}

module.exports = {
    studentInfo,
    studentRank
};
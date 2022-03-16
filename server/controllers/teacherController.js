const TeacherModel = require("../models/teacher")

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
    teacherInfo
};
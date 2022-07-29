const mongoose = require("mongoose")

let sechma = new mongoose.Schema({
    "roll_id":{
            type:Number
    },
    "Frist_name":{
        type:String,
        
    },
    "Last_Name":{
        type:String
    },
    "Email_id":{
        type:String,

    }
})


module.exports=mongoose.model("saregapa",sechma)
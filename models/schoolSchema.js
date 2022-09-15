const mongoose = require (mongoose)
const schoolSchema = mongoose.Schema({
    schoolname:{
        type: String,
        required:true,
        unique: true
    },
    location:{
        type:String,
        required:true,
        unique: false,
    },
    Adresss:{
        gps: String,
        box:String
    },
category:{
    type: String,
    required:true,
},
facilities:{
    type: Array,
    required: true,
    maxlength: 3,
},
numOfStudents:{
    type: num,
    required:true
},
contact:{
    phone: num,
    email: String,
}
},{ 
    timestamps:true
})
const school=mongoose.model("school",schoolSchema)
module.exports=school
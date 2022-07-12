const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,

    },
   Email:{
        type:String,
        required:true
   },
   Mobile:{
    type:Number,
    required:true
},
 
},{timestamps:true})
module.exports = mongoose.model("Login",loginSchema);
const mongoose=require("mongoose")
const loginschema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    }
)
const login=mongoose.model("logins",loginschema);
module.exports=login;
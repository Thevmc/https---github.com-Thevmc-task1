const mongoose=require("mongoose");
  
const userSchema=mongoose.Schema({
    name:{type:String,required:[true,"please add your name"]},
    email:{type:String,required:[true,"add your email"],unique:[true,"email should not same"]},
    city:{type:String}

})
 module.exports=mongoose.model("naruto",userSchema);
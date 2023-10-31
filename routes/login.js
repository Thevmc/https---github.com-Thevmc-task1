const express=require("express");

const router=express.Router();

const {Signupmethod,demomethod} = require("../controllers/login");

router.route("/user/signup").get(demomethod).post(Signupmethod);



module.exports=router;
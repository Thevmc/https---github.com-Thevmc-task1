const express=require("express");
const login =require("../models/login")

async function Signupmethod(req,res)
{
    //const {name,email,password}=req.body
   //const result= await login.create({name,email,password});
   return res.json({msg:"signup done "})

}
async function demomethod(req,res)
{
    return res.json({msg:"this is a get method"})
}
module.exports={Signupmethod,demomethod};
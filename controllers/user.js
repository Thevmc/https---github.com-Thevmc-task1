const express=require("express");
const User=require("../models/user")
const login =require("../models/login")
const {v4:uuidv4}=require("uuid")
const {setuser}=require("../service/auth")

//get
async function getmethod(req,res)
{
  const user= await User.find();
  if(!user)
  {
    throw new Error("Contact  not found");
  }
  return res.json(user);
}
//getbyid
async function getmethodbyid(req,res)
{
  const user= await User.findById(req.params.id);
  if(!user)
  {
    throw new Error("Contact  not found");
  }
  return res.json(user);
}
//postmethod
async function postmethod(req,res)
{
  console.log("this is a request   "+req.body)
  const {name,email,city}=req.body;
  const user=await User.create({
    name,email,city
  })
  return res.json({status:"created .."});
}

//patchmethod
async function patchmethod(req,res)
{
    console.log("this is req ",req.body)
    const user=await User.findByIdAndUpdate(req.params.id,req.body);
   return res.json(user);
}

//delete by id
async function deletemethodbyid(req,res)
{
  const user=await User.findById(req.params.id);
  if(!user)
  {
    throw new Error("no data found this id");
  }
  await User.deleteOne(user)
  return res.json({deleted:"success"});
}
//sign up method
async function Signup(req,res)
{
    const {name,email,password}=req.body
    const result= await login.create({name,email,password});
    return res.json({Signup:result});

}
//login method
async function Loginmethod(req,res)
{
  const{email,password}=req.body
  const result=await login.findOne({email,password})
  if(!result)
  {
    res.send("Invalid login details..")
  }
  const sessionid=uuidv4();
  setuser(sessionid,result);
  res.cookie("uid",sessionid);
  return res.json({s_id:sessionid,userdetails:result});
}

module.exports={Signup,getmethod,getmethodbyid,postmethod,patchmethod,deletemethodbyid,Loginmethod}
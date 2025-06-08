
const Users=require("../models/users");
const {}=require("express");
const  registeruser=async(req,res)=>{
    const {name,email,password}=req.body;
try{

    
 await Users.create({name,email,password});
 res.status(200).json({
    success:true,
    message:"User created successfully"
 });
}catch(e){
res.status(500).json({success:false,message:error.message});
}

}

const loginuser=async(req,res)=>{
    const {email,password}=req.body;
try{

const user=await Users.find({email,password});
if(!user)return res.status(404).json({success:false,message:"user not found"});

res.status(200).josn({user});
}catch(e){
console.log(e);
res.status(500).json({success:false,message:"error finding users"})
}
}

const getallUsers=async(req,res)=>{

try{
const allusers=await Users.find();//get all users
res.status(200).json({ success: true, message: "All users fetched",allusers})
}catch(e){
    res.status(500).json({success:false, message: "Something went wrong", error: e.message });
}
}

module.exports={registeruser,loginuser,getallUsers}

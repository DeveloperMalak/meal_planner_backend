
const Users=require("../models/users");
const {}=require("express");
const  registeruser=async(req,res)=>{
    
    const {name,email,password}=req.body;
try{

    
const createuser= await Users.create({name,email,password});
 res.status(200).json({
    success:true,
    message:"User created successfully",
    user:{
        id:createuser._id,
        name:createuser.name,
        email:createuser.email,

    },
    token:"dfsdfs"
 });
 console.log("success")
}catch(e){
    console.log(e)
res.status(500).json({success:false,message:"some thing wernt wrong",error:e});
}

}

const loginuser=async(req,res)=>{
    const {email,password}=req.body;
try{

const user=await Users.findOne({email,password});
if(!user)return res.status(404).json({success:false,message:"user not found"});
console.log("successfully login")
res.status(200).json({success:true,message:"login successfull",user,token:"dfsdfsdfsdf"});
}catch(e){
console.log(e);
res.status(500).json({success:false,message:"error finding users",error:e})
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


const getUserInfo=async(req,res)=>{
    const {id}=req.headers;
    try{
        const user=await Users.findOne({id});
       if(!user)return res.status(404).json({success:false,message:"user not found"});
       console.log("retrived successfull");
       res.status(200).json({success:true,message:"user info fetched",user})

    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:"some thing went wrong",error:e.message});

    }
}
module.exports={registeruser,loginuser,getallUsers,getUserInfo}

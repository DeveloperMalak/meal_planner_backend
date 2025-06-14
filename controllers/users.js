
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
<<<<<<< Updated upstream
        id:createuser._id,
        name:createuser.name,
        email:createuser.email,

    },
    token:"dfsdfs"
=======
        id:"user id",
        name:name,
        email:email,

    },
    token:"ddkjsdksjdsd"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
console.log("successfully login")
res.status(200).json({success:true,message:"login successfull",user,token:"dfsdfsdfsdf"});
=======

res.status(200).json({success:true,message:"login successfully",user,
    token:"dksdlkjsldk",
});
>>>>>>> Stashed changes
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

module.exports={registeruser,loginuser,getallUsers}

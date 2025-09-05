
const Users=require("../models/users");
const {}=require("express");
const Votes = require("../models/votes");
const  registeruser=async(req,res)=>{
    
    const {name,email,password}=req.body;
try{

    const exixtinguser=await Users.findOne({email});
 if(exixtinguser){
      return res.status(404).json({
                success: false,
                message: "User already registered with this email"
            });
 }
const createuser= await Users.create({name,email,password});
const io=req.app.get("io");
io.emit("new user",{ id:createuser._id,
  name:createuser.name,
  email:createuser.email,})
 res.status(200).json({
    success:true,
    message:"User created successfully",
    user:{
 
        id:createuser._id,
        name:createuser.name,
        email:createuser.email,

    },
   
    token:"ddkjsdksjdsd"

 });


 console.log("success")
}catch(e){
    console.log(e)
res.status(500).json({success:false,message:"something wernt wrong",error:e});
}

}

const loginuser=async(req,res)=>{
    const {email,password}=req.body;
try{

const user=await Users.findOne({email,password});
if(!user)return res.status(404).json({success:false,message:"user not found"});
console.log("successfully login")
res.status(200).json({success:true,message:"login successfull",user,token:"ddkjsdksjdsd"});


}catch(e){
console.log(e);
res.status(500).json({success:false,message:"something went wrong",error:e})
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
    const id=req.params.id;
    try{
      const votes=await Votes.find();
    const totalvotescounts=await Votes.aggregate([
      {
        $group:{
          _id:"$candidates_id",
          count:{$sum:1}
        }
      }
    ]);
    const voteMap={};
    
    totalvotescounts.forEach(v=>{
    
      voteMap[v._id.toString()]=v.count;
    });
    const maxvotecount= Math.max(...totalvotescounts.map(e=>e.count))
        const user=await Users.findOne({_id:id});
        const count=await Votes.countDocuments({candidates_id:id})
       if(!user)return res.status(404).json({success:false,message:"user not found"});
       console.log("retrived successfull");
       res.status(200).json({success:true,message:"user info fetched",user:user,
        votecount:count,
        role:count==maxvotecount?"admin":"user"})

    }catch(e){
        console.log(e);
        res.status(500).json({success:false,message:"some thing went wrong",error:e.message});

    }
}
module.exports={registeruser,loginuser,getallUsers,getUserInfo}

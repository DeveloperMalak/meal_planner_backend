const users = require("../models/users");
const Votes=require("../models/votes");
const Users=require("../models/users")
const createvote=async(req,res)=>{
    const {voter_id,candidates_id}=req.body;
try{
  await Votes.create({voter_id,candidates_id});
  res.status(200).json({success:true,message:"voted succesfully"});
console.log("success");

}catch(e){
res.status(500).json({succes:false,messge:"some thing went wrong",error:e});
}
}

const totalvotes=async(req,res)=>{
try{
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
const usersList=await Users.find();
//merge user and votes
const finaluservoteList=usersList.map(user=>{
   const id=user._id;
   return {
    id:user.toObject(),
    voteCount: voteMap[id] || 0
   }
})

res.status(200).json({success:true,message:"successfully retrived",finaluservoteList});
  console.log("success")
}catch(e){
res.status(500).json({success:false,message:"somthing went wrong",error:e});
  console.log("some thing went wrong");
}
}


const individualsvotes=async(req,res)=>{
  const {candidates_id}=req.params.candidates_id;
  try{
    const count = await Votes.countDocuments({ candidates_id: candidates_id });
    console.log("Total votes:", count);
    
  res.status(200).json({success:true,message:"successfully retrived",totalvotes:count});
  console.log("success")
  }catch(e){
    res.status(500).json({success:false,message:"somthing went wrong",error:e});
    console.log("some thing went wrong");
  }
}


const deleteVotes=async(req,res)=>{
  const {voterid}=req.params.voter_id;
try{
  await Votes.deleteOne({voter_id:voterid});
  res.status(200).json({sucess:true, message:"succesfully deleted",});
  console.log("success");
}catch(e){


  console.log("something went wrong");
  res.status(500).json({success:false,message:"some thing wernt wrong",error:e});
}
}
module.exports={createvote,totalvotes,deleteVotes,individualsvotes}
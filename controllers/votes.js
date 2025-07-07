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
  const votes=await Votes.find();
const totalvotescounts=await votes.aggregate([
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
const users=await Users.find();
//merge user and votes
const finaluservoteList=users.map(user=>{
   const id=user.id;
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


const deleteVotes=async(req,res)=>{
  const {id}=req.query;
try{
  await Votes.deleteOne({_id:id});
  res.status(200).json({sucess:true, message:"succesfully deleted",});
  console.log("success");
}catch(e){


  console.log("something went wrong");
  res.status(500).json({success:false,message:"some thing wernt wrong",error:e});
}
}
module.exports={createvote,totalvotes,deleteVotes}
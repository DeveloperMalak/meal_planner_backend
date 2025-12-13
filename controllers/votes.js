const users = require("../models/users");
const Votes=require("../models/votes");
const Users=require("../models/users")
const createvote=async(req,res)=>{
    const {voter_id,candidates_id}=req.body;
try{
const alreadyvoted= await Votes.findOne({voter_id});
if(alreadyvoted){
  return res.status(400).json({success:false,message:"already casted vote"});
}
  await Votes.create({voter_id,candidates_id});
  await new Promise(resolve => setTimeout(resolve, 100));
const io=req.app.get("io");
io.emit("new vote",{ voter_id:voter_id,candidates_id:candidates_id});
 
  res.status(200).json({success:true,message:"voted succesfully"});
console.log("success");

}catch(e){
res.status(500).json({succes:false,messge:"some thing went wrong",error:e});
}
}

const totalvotes=async(req,res)=>{
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
const usersList=await Users.find();
//merge user and votes
const finaluservoteList=usersList.map(user=>{
   const id=user._id;
   const votes=voteMap[id];
   return {
    id:user.toObject(),
    voteCount: voteMap[id] || 0,
    role:votes==maxvotecount? "admin":"user",
  
   }
})

res.status(200).json({success:true,message:"successfully retrived",finaluservoteList});
  console.log("success")
}catch(e){
res.status(500).json({success:false,message:"somthing went wrong",error:e});
  console.log("some thing went wrong");
}
}
const whomivoted=async(req,res)=>{
  const voter_id=req.params.voter_id;
  try{
    const mycastedvote=await Votes.findOne({voter_id:voter_id})
    if(mycastedvote){
    res.status(200).json({success:true,message:"casted vote",mycastedvote});
    console.log("success");
  }else{
   res.status(404).json({success:false,message:"no casted votes",}) 
  }

  }catch(e){
    res.status(500).json({success:false,message:"somthing went wrong",error:e});
    console.log("some thing went wrong");
  }
}
const individualsvotes=async(req,res)=>{
  const candidates_id=req.params.candidates_id;
  try{
    const votes=Votes.find();
    const totalvotescounts=await Votes.aggregate([
      {
        $group:{
          _id:"$candidates_id",
          count:{$sum:1}
        }
      }
    ]);
    const maxvotecount= Math.max(...totalvotescounts.map(e=>e.count))
    const count = await Votes.countDocuments({ candidates_id: candidates_id});
    console.log("Total votes:", count);
  
  res.status(200).json({success:true,message:"successfully retrived", votes:count,role:count==maxvotecount?"admin":"user"});
  console.log("success")
  }catch(e){
    res.status(500).json({success:false,message:"somthing went wrong",error:e});
    console.log("some thing went wrong");
  }
}



const deleteVotes=async(req,res)=>{
  const voter_id=req.params.voter_id;
try{
  await Votes.deleteOne({voter_id:voter_id});


  await new Promise(resolve => setTimeout(resolve, 100));
  const io=req.app.get("io");
  io.emit("vote deleted",{ voter_id:voter_id,candidates_id:candidates_id})
  res.status(200).json({sucess:true, message:"vote deleted",});
  console.log("success");
}catch(e){


  console.log("something went wrong");
  res.status(500).json({success:false,message:"some thing wernt wrong",error:e});
}
}
module.exports={createvote,totalvotes,deleteVotes,individualsvotes,whomivoted}
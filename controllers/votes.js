const Votes=require("../models/votes");

const createvote=async(req,res)=>{
    const {voter_id,catndidates_id}=req.body;
try{
  await Votes.create({voter_id,catndidates_id});
  res.status(200).json({success:true,message:"voted succesfully"});
console.log("success");

}catch(e){
res.status(500).json({succes:false,messge:"some thing went wrong",e});
}
}

const totalvotes=async(req,res)=>{

}
const currentuservotes=async(req,res)=>{
    
}


const deleteVotes=async(req,res)=>{
try{}catch(e){}
}
module.exports={createvote,totalvotes,currentuservotes,deleteVotes}
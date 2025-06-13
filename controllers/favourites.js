const Favourite=require("../models/favourites");

const createfav=async(req,res)=>{
    const {}=res.body;
    
    
    try{

        await Favourite.create({});
        res.status(200).json({success:true,message:"created succesfully",});
        console.log("success");
    }catch(e){
res.status(500).json({success:false,message:"something went wrong",e});
        console.log(e);
    }
}
const getallfav=async(req,res)=>{
    const {}=res.body;
    try{
 const data=await Favourite.find();
res.status(200).json({success:true,message:"created successfully",data});
console.log("success")
    }catch(e){
   console.log(e);
   res.status(500).json({success:false,message:"some thing went wrong"},e)
console.log("success")
    }
}
const unfav=async(req,res)=>{
    const {id}=res.query;
    try{
     await Favourite.deleteOne({_id:id});
        res.status(200).json({success:true,message:"deleted succesfully"});
console.log("success")


    }catch(e){
        res.status(500).json({success:false,message:"something went wrong",error:e})
        console.log(e);
    }
}

module.exports={createfav,getallfav,unfav}
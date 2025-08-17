const Favourite=require("../models/favourites");

const createfav=async(req,res)=>{
    const {recipe_id,fav_by}=req.body;
    
    
    try{

        await Favourite.create({recipe_id,fav_by});
        res.status(200).json({success:true,message:"fav created succesfully",});
        console.log("success");
    }catch(e){
res.status(500).json({success:false,message:"something went wrong",error:e});
        console.log(e);
    }
}
const getallfav=async(req,res)=>{

    try{
 const data=await Favourite.find({});
res.status(200).json({success:true,message:"retrived successfully",data});
console.log("success")
    }catch(e){
   console.log(e);
   res.status(500).json({success:false,message:"some thing went wrong",error:e},)
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
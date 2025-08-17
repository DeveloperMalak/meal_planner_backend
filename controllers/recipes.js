
const Recipe=require("../models/recipes");
const addrecipe=async(req,res)=>{
const {name,image,created_by}=req.body;

try{
await Recipe.create({name,image,created_by});
res.status(200).json({success:true,message:"added succesfully"});
console.log("success");
}catch(e){
    res.status(500).json({success:false,message:"failed",error:e});
console.log(e);

}
}

const getallrecipes=async(req,res)=>{
    try{
           const data=  await Recipe.find();
             res.status(200).json({success:false,message:"retrived succesfully",data});
console.log("success");
    }catch(e){
res.status(500).json({success:false,message:"something went wrong",error:e})

console.log(e);
    }



}
module.exports={addrecipe,getallrecipes}
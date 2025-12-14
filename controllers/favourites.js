const Favourite=require("../models/favourites");
const Recipe=require("../models/recipes");

const createfav=async(req,res)=>{
    const {recipe_id,fav_by}=req.body;
    
    
    try{

        const fav=await Favourite.create({recipe_id,fav_by});
        await new Promise(resolve => setTimeout(resolve, 100));
        const io=req.app.get("io");
        io.emit("new fav",{ id:fav._id,
          recipe:fav.recipe_id,
          user:fav.fav_by,})

        res.status(200).json({success:true,message:"fav created succesfully",});
        console.log("success");
    }catch(e){
res.status(500).json({success:false,message:"something went wrong",error:e});
        console.log(e);
    }
}
const getallfav=async(req,res)=>{
try{
  const favrecipes=await Favourite.find();
const totalfavcounts=await Favourite.aggregate([
  {
    $group:{
      _id:"$recipe_id",
      count:{$sum:1},

    }
  }
]);
const favMap={};

totalfavcounts.forEach(v=>{

  favMap[v._id.toString()]=v.count;
});
const recipesList=await Recipe.find();
//merge user and votes
const finalfavList=recipesList.map(rec=>{
   const id=rec._id;
   const fav=favMap[id];
   return {
    id:rec.toObject(),
    favCount: favMap[id] || 0,
   }
})

res.status(200).json({success:true,message:"successfully retrived",finalfavList});
  console.log("success")
}catch(e){
res.status(500).json({success:false,message:"somthing went wrong",error:e});
  console.log("some thing went wrong");
}
}


const unfav=async(req,res)=>{
  const {user_id,recipe_id}=req.params;
try{
  await Favourite.deleteOne({user_id:user_id,recipe_id:recipe_id});


  await new Promise(resolve => setTimeout(resolve, 100));
  const io=req.app.get("io");
  io.emit("unfav",{ user_id:user_id,recipe_id:recipe_id})
  res.status(200).json({sucess:true, message:"vote deleted",});
  console.log("success");
}catch(e){


  console.log("something went wrong");
  res.status(500).json({success:false,message:"some thing wernt wrong",error:e});
}
}

module.exports={createfav,getallfav,unfav}
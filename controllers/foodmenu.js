const Menu=require("../models/food_menu")

const getfoodMenu=async(req,res)=>{
try{

    const menu = await Menu.find()
    .populate("days.monday.breakfast.mealid")
    .populate("days.monday.lunch.mealid")
    .populate("days.monday.dinner.mealid")
    .populate("days.tuesday.breakfast.mealid")
    .populate("days.tuesday.lunch.mealid")
    .populate("days.tuesday.dinner.mealid")
    .populate("days.wednesday.breakfast.mealid")
    .populate("days.wednesday.lunch.mealid")
    .populate("days.wednesday.dinner.mealid")
    .populate("days.thursday.breakfast.mealid")
    .populate("days.thursday.lunch.mealid")
    .populate("days.thursday.dinner.mealid")
    .populate("days.friday.breakfast.mealid")
    .populate("days.friday.lunch.mealid")
    .populate("days.friday.dinner.mealid")
    .populate("days.saturday.breakfast.mealid")
    .populate("days.saturday.lunch.mealid")
    .populate("days.saturday.dinner.mealid")
    .populate("days.sunday.breakfast.mealid")
    .populate("days.sunday.lunch.mealid")
    .populate("days.sunday.dinner.mealid");
  
res.status(200).json({success:true,message:"retrived succesfully",menu});
console.log("success");

}catch(e){
    res.status(500).json({success:false,message:"something went wrong",error:e})
console.log(e);
}

}


const updatefoodMenu=async(req,res)=>{
    const {menuupdates}=req.body
try{
     await Menu.UpdateOne({},{$set:menuupdates})
     res.status(200).json({success:true,message:"successfully updated"})
     console.log("updated successfullu")

}catch(e){
    res.status(500).json({success:false,message:"something went wrong",error:e})
}

}
const createfoodmenu=async(req,res)=>{
const menudata=req.body;
    try{
        await Menu.create(

       menudata


        );
        res.status(200).json({success:true,message:"designed successfully"});
        console.log(" designed success");

    }catch(e){
            res.status(500).json({success:false,message:"something went wrong",error:e})
            console.log(e)
    }
}

module.exports={getfoodMenu,updatefoodMenu,createfoodmenu}
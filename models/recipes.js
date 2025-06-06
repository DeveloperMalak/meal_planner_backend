const mongoose=require("mongoose");

const recipeSchema=mongoose.Schema({

name:{
    type:String,
    required:[true,"this field is required"],

    
},
description:String,
image:{
    data:Buffer,
    required:true,

},
created_by:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:false

},
created_at:{
    type:Date,
    default:Date.now()
}
    
})

module.exports=mongoose.model("Recipe",recipeSchema);

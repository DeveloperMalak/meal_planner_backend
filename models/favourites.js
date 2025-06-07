const mongoose=require("mongoose");
const favSchema=mongoose.Schema({
         recipe_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Recipe"
            
         }  ,
         
         fav_by:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Users"
         },

        reactions:{
            type:Boolean,
            required:true,
            default:false
        }

});
module.exports=mongoose.model("Favourites",favSchema);
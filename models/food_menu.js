const mongoose=require("mongoose");
const mealSchema=new mongoose.Schema({
    mealid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        required:false
      },
      time: {
        type: String,
        
        required:false
      }
})
const foodmenuSchema=mongoose.Schema({

    days:{

        monday:{
            breakfast:mealSchema,
        
           lunch:mealSchema,
           dinner:mealSchema,
        
        },

        tuesday:{
breakfast:mealSchema,
lunch:mealSchema,
dinner:mealSchema
        },


        wednesday:{
               breakfast:mealSchema,
               lunch:mealSchema,
               dinner:mealSchema
        },


        thursday:{
      breakfast:mealSchema,
      lunch:mealSchema,
      dinner:mealSchema
        },

        friday:{
            breakfast:mealSchema,
            lunch:mealSchema,
            dinner:mealSchema
        },
        saturday:{

            breakfast:mealSchema,
            lunch:mealSchema,
            dinner:mealSchema
        },
        sunday:{
            breakfast:mealSchema,
            lunch:mealSchema,
            dinner:mealSchema
        }
    },
    edited_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:false
    },
    edited_at:{
        type:Date,
        default:Date.now(),
        
    }
});
module.exports=mongoose.model("Menu",foodmenuSchema)
const  mongoose=require("mongoose");
const usersSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true, "name is required"],
        trim:true,
        minlength:[3,"name must be at least 3 characters"]
    },


    email:{


        type:String,
        requried:[true,"email is requied"],
        trim:true,
        unique:true,
        
  lowercase:true,
  validate:{
    validator:function(value){
         // simple regex for email validation
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    message:"please provide a valid email adress",
  }      
    },

    pasword:{

        type:String,
        minlength:[8,"password must be at least 6 characters"],
        required:[true,"password is required"],
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model("Users",usersSchema);
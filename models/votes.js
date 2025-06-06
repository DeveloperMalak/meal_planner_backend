const mongoose=require("mongoose");

const votesschema= mongoose.Schema(
    {
          voter_id:{
                 type:mongoose.Schema.Types.ObjectId,
                 ref:"Users",
                 required:true,
          },
          candidates_id:{    
                type:mongoose.Schema.Types.ObjectId,
                ref:"Users",
                required:true,

          },

          created_by:{
                type:String
          }
          
    
    }
);
module.exports= mongoose.model("Votes",votesschema);
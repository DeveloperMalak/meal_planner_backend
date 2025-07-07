const mongoose=require("mongoose");

const votesschema= mongoose.Schema(
    {
          voter_id:{
                 type:mongoose.Schema.Types.ObjectId,//type o the voter id o mongoose id or type object id 
                 ref:"Users",//refers to a document in the  users collections
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
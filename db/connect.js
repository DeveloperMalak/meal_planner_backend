const mongoose=require("mongoose");
const connectdb=(url)=>{
    console.log("db connected");
    return mongoose.connect(url);
}
module.exports=connectdb;
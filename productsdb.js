require("dotenv").config();
const connectdb=require("./db/connect");
const Users=require("./models/users");
const userdatajson=require("./dummyjson.json");
const start=async()=>{
    try{
        await connectdb(process.env.MONGODB_URL);
        await Users.deleteMany()
        await Users.create(userdatajson);


        console.log("success");
    }catch(e){
        console.log(e);
    }
}
start();
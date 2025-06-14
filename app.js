require("dotenv").config();

const express=require("express");
const app=express();

const PORT=5000
const connectdb=require("./db/connect");
<<<<<<< Updated upstream
const routes=require("./routes/index")
=======
const routes=require("./routes")
>>>>>>> Stashed changes
const url=process.env.MONGODB_URL;



<<<<<<< Updated upstream
app.use(express.json());
app.use("/api",routes);//this is the middleware
=======
app.use("/api/",routes);//this is the middleware
>>>>>>> Stashed changes

//create a server
const start=async()=>{

    try{
await connectdb(url);//db connected
console.log("success");
app.listen(PORT,()=>{
    console.log('${PORT}yes i am connected http://127.0.0.1:5000/');
})

    }catch(e){
        console.log(e);
    }
}
start();



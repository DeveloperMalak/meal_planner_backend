require("dotenv").config();
const http=require("http");
const express=require("express");
const app=express();
const PORT=5000
const connectdb=require("../db/connect");
const routes=require("./routes")
const url=process.env.MONGODB_URL;

app.get("/",(req,res)=>{
    res.send("hi noor we have connected to ths");
});


app.use("api/",routes);//this is the middleware

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



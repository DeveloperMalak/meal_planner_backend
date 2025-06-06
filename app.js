require("dotenv").config();
const http=require("http");
const express=require("express");
const app=express();
const PORT=5000



app.get("/",(req,res)=>{
    res.send("hi noor we have connected to ths");
});
//create a server



app.listen(PORT,()=>{
    console.log('${PORT}yes i am connected http://127.0.0.1:5000/');
})

require("dotenv").config();

const express=require("express");
const app=express();

const PORT=5000
const connectdb=require("./db/connect");

const routes=require("./routes/index")


const url=process.env.MONGODB_URL;



app.use(express.json());

app.use("/api/",routes);//this is the middleware


//create a server
const start=async()=>{

    try{
await connectdb(url);//db connected
console.log("success");
app.listen(PORT,"0.0.0.0",()=>{
<<<<<<< HEAD
    console.log('${PORT}yes i am connected http://192.168.10.86:5000/');
=======
    console.log('${PORT}yes i am connected http://192.168.10.39:5000/');
>>>>>>> 257520c89308750843828c84223fcf572307e0a7
})

    }catch(e){
        console.log(e);
    }
}
start();



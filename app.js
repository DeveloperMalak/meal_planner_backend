require("dotenv").config();

const express=require("express");
const app=express();
const http=require("http");
const server=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(server,{
    cors: {
        origin: "*", // Allows ALL origins (not recommended for production)
        methods: ["GET", "POST"],
        credentials:false
      }
});
const PORT=5000
const connectdb=require("./db/connect");

const routes=require("./routes/index")


const url=process.env.MONGODB_URL;



app.use(express.json());

app.use("/api/",routes);//this is the middleware

io.on("connection", (socket) => {
    console.log("user connected to the server");
  
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
//create a server
app.set("io", io);
const start=async()=>{

    try{
await connectdb(url);//db connected
console.log("success");
server.listen(PORT,"0.0.0.0",()=>{

    console.log('${PORT}yes i am connected http://192.168.10.119:5000/');

})

    }catch(e){
        console.log(e);
    }
}
start();



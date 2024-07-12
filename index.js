const express= require("express")
const mongoose=require("mongoose");
const {MONGO_USER,MONGO_PASSWORD, MONGO_IP, MONGO_PORT}=require("./config/config")

const app=express()
app.use(express.json());


const postRouter=require("./routes/postRoutes");
const userRouter=require("./routes/userRoutes");



mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(()=>
console.log("SUCCESSFULLY CONNECTED "))
.catch((e)=>console.log(e));






app.get("/",(req,res)=>{
    res.send("<h1>Devops with node js website goood night</h1>");
})

app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",userRouter);



const port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on port ${port}`))


//docker logs devopswithnodejs-node-app-1 -f
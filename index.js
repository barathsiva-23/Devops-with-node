const express= require("express")
const mongoose=require("mongoose");
const {MONGO_USER,MONGO_PASSWORD, MONGO_IP, MONGO_PORT}=require("./config/config")




const postRouter=require("./routes/postRoutes");


mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
.then(()=>
console.log("SUCCESSFULLY CONNECTED "))
.catch((e)=>console.log(e));


const app=express()
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("<h1>Devops with node js website goood night</h1>");
})

app.use("/api/v1/posts",postRouter)



const port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on port ${port}`))


//docker logs devopswithnodejs-node-app-1 -f
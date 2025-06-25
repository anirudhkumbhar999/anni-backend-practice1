
import { app } from "./app.js";
import connectDB from "./db/index.js";




connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db error",err)
})
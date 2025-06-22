
import dotenv from "dotenv";
//database connectyvity
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
dotenv.config({ path: "./.env" });

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGOURL}/${DB_NAME}`)
         console.log(`\n Mongodb connected !! DB host:${connectionInstance.connection.host}`)
    }catch(error){
         console.log("Mongodb connection error",error);
         process.exit(1)
    }
}


export default connectDB
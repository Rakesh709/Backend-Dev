//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import DB_NAME from './constants'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()








//APROACH 1
/*
import express from "express"
const app = express();

//in IEFI recommended to start with semi-colum; 
;( async ()=> {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
      app.on("Error",(error)=>{
        console.log("Error",error)
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
      })
    } catch (error) {
        console.log("Error",error)
    }
})()

*/
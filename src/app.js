import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin:processENV.CORS_ORIGIN,
    credentials :true
}))

//middleware config
//to accept json data
app.use(express.json({limit:"16kb"}))

//for url encoded rakesh+kumar or rakesh%20kumar
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))

//cookies parser
app.use(cookieParser())


export { app}
// import express, { Application }  from "express";
// import cors from "cors";
// import dotenv from "dotenv"
// import db from "./config/db";
// import { mainApp } from "./mainapp";
// // import mongoose from "mongoose";

// const app: Application = express();
// const port: number = parseInt(process.env.PORT!);


// app.use(cors())
// app.use(express.json());



// app.get("/api",);
// app.listen(process.env.PORT || port,()=>{
//     console.log();
//     console.log("Server is no baby");
//     db()
// })


// mainApp(app)
// process.on("uncaughtException", (err : any)=>{
//     console.log("server is shutting down due to uncaughtException", err);
//     process.exit(1)
// })

// process.on("unhandledRejection", (reason : any)=>{
//     console.log("server is shutting down due to uncaughtException", reason);
//     server.close(()=>{
//         process.exit(1)
//     })
// })

import express, { Application } from "express"
import dotenv from "dotenv"
import db from "./config/db"
import { mainApp } from "./mainapp"
dotenv.config()

const app : Application = express()
const port: number = parseInt(process.env.Port!)
mainApp(app)

const server = app.listen(process.env.Port || port, ()=>{
    db()
console.log("Server is life baby");
})

process.on("uncaughtException", (error : any)=>{
    console.log("server is shutting down due to uncaughtException", error);
    process.exit(1)
})

process.on("unhandledRejection", (reason : any)=>{
    console.log("server is shutting down due to unhandledRejection", reason); 
    server.close(()=>{
        process.exit(1)
    })
})
import mongoose from "mongoose";
import env from "dotenv";
env.config()

const url: string = process.env.DATABASE!
// const url: string = "mongodb://localhost:27017/contact"

const db = () =>{
    mongoose.connect(url).then(()=>{
        
        
    })
}

export default db
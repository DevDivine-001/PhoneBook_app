import cors from "cors"
import express, { Application, Request, Response } from "express"
import contact from "./router/CountactRouter"

export const mainApp = (app : Application) =>{
    app.use(cors())
    app.use(express.json())

    app.use("/api", contact)

    app.get("/", (req : Request, res : Response)=>{
        console.log(req);
        
        try {
            return res.status(200).json({
                message : "Welcome"
            })
        } catch (error) {
            return res.status(404).json({
                message : "Error"
            })
        }
    })
}
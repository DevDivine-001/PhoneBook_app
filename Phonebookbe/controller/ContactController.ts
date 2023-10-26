import { Request, Response } from "express";
import contactModel from "../model/Contactmodel";

export const SavedContact = async(req : Request, res : Response) =>{
    try {
        const {name, PhoneNo, category} = req.body

        let image = await name.charAt().toUpperCase()

        const contacts = await contactModel.create({name, PhoneNo, category, 
            image
        })

        return res.status(201).json({
            message: "Contact Saved",
            data : contacts 
        })

    } catch (error: any) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const viewContact = async(req : Request, res : Response) =>{
    try {
        const contacts = await contactModel.find().sort({name : 1}) 
       
        return res.status(200).json({
            message: "Contact viewed",
            data : contacts
        })

    } catch (error: any) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const SearchByCategory = async(req : Request, res : Response) =>{
    try {
        const {category} = req.body

        const contacts = await contactModel.find({category}).sort({createdAt : -1})

        return res.status(200).json({
            message: "Contact searched",
            data : contacts 
        })

    } catch (error: any) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const UpdateContact = async(req : Request, res : Response) =>{
    try {
        const {contactID} = req.params
        const {phoneNumber, name} = req.body

        const image = name.charAt().toUppercase()

        const contacts = await contactModel.findByIdAndUpdate( contactID,
            {phoneNumber, name, image}, {new : true}
        )

        return res.status(201).json({
            message: "Contact updated",
            data : contacts
        })

    } catch (error: any) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}

export const DeleteContact = async(req : Request, res : Response) =>{
    try {
        
        const {contactID} = req.params

        const contacts = await contactModel.findByIdAndDelete(contactID)

        return res.status(201).json({
            message: `${contacts?.name} deleted`,
        })

    } catch (error: any) {
        return res.status(404).json({
            message: "Error",
            data : error.message 
        })
    }
}


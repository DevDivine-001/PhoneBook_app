import mongoose from "mongoose";

interface iContact{
    name : string,
    PhoneNo : Number,
    category : string,
    image : string
}

interface iContactData extends iContact, mongoose.Document {}

const contactModel = new mongoose.Schema({
    name:{
        type : String,
        require : true,
    },
    PhoneNo:{
        type : Number,
        require : true,
        trim : true,
    },
    category:{
        type : String,
        require : true,
    },
    image:{
        type : String,
        toUpperCase : true,
    },
}, {timestamps : true});

export default mongoose.model<iContactData>("contacts", contactModel);
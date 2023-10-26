import express from "express";
import { DeleteContact, 
    SavedContact,
     SearchByCategory,
      UpdateContact,  
      viewContact } from "../controller/ContactController";

const Router = express.Router()

Router.route("/user-contacts").post(SavedContact)
Router.route("/view-contacts").get(viewContact)

Router.route("/search").get(SearchByCategory)

Router.route("/:contactID/update").patch(UpdateContact)

Router.route("/:contactID/delete").delete(DeleteContact)

export default Router
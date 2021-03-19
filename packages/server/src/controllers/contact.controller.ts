import { Request, Response } from "express";
import ContactService from "../service/contact.service";

class ContactController {

    public static IndexContact(req: Request, res: Response): Response {
        console.log("Request IP:", req.ip)
        try {
            return res.status(200).json({
                success: true,
                message: "Index of the service contact"
            })
        }
        catch(e){
            console.log(e)
            return res.status(200).json({
                success: false,
                message: "Internal server error"
            })
        }
    }

    public static async SaveContact(req: Request, res: Response): Promise<Response> {
        const {name, email, choose, description} = req.body
        if (
            name == null || email == null || 
            choose == null ||  description == null
        ){
                return res.status(400).json({
                    success: false,
                    message: "Please send all params"
                })
        }
        const contactToSave = {
            name,
            email,
            choose,
            description
        } 

        const contact = await ContactService.Save(contactToSave)
        if(contact.success === false){
            return res.status(500).json({
                success: false,
                message: "Error to create the contact"
            })
        }
        const contactSaved = contact.contact 
        return res.status(200).json({
            succes: true,
            contactSaved
        })
    }
}

export default ContactController
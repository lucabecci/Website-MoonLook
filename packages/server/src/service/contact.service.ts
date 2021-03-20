import { RequestCreateContact, ReturnCreateContact } from "../utils/types";
import Contact from "../models/Contact";
class ContactService {
    public static async Save(
        contact: RequestCreateContact
    ): Promise<ReturnCreateContact> {
        try {
            const newContact = await new Contact(contact);
            const contactSaved = await newContact.save();
            return {
                contact: contactSaved,
                success: true,
            };
        } catch (e) {
            console.log(e);
            return {
                contact: null,
                success: false,
            };
        }
    }
}

export default ContactService;

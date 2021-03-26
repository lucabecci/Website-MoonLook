import axios from "axios";
import { useReducer } from "react";
import ContactReducer from "./ContaxtReducer";
import { ReqContact } from "../../utils/interfaces";
import { CLOSE_CONTACT_ALERT, ERROR_CONTACT, SUCCESS_CONTACT } from "../types";
import ContactContext from "./ContactContext";
import { checkValues, emailIsValid } from "../../utils/Checks";
const ContactState = (props: any) => {
    const proxy = process.env.PROXY_URL || "";

    const initialState = {
        success: false,
        error: false,
        message: "",
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    const sendContact = async (req: ReqContact) => {
        try {
            const campsChecked = checkValues(
                req.nombre,
                req.apellido,
                req.email,
                req.description,
                req.choose,
                req.numero
            );
            if (campsChecked) {
                errorContact("Please send a valid types for the camps");
                return;
            }
            const emailChecked = emailIsValid(req.email);
            if (emailChecked) {
                errorContact("Please send a valid email");
                return;
            }
            const resp = await axios.post(proxy, req);
            if (resp.data.succes === true) {
                successContact("Succes to send your contact");
                return;
            }
        } catch (e) {
            errorContact(e.response.data.message);
            return;
        }
    };
    const successContact = (message: string) => {
        dispatch({ type: SUCCESS_CONTACT, payload: message });
    };
    const errorContact = (message: string) => {
        dispatch({ type: ERROR_CONTACT, payload: message });
    };
    const closeContactAlert = () => {
        dispatch({ type: CLOSE_CONTACT_ALERT, payload: null });
    };
    return (
        <ContactContext.Provider
            value={{
                contact: state,
                sendContact,
                successContact,
                errorContact,
                closeContactAlert,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;

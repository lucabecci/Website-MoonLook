import axios from "axios";
import { useReducer } from "react";
import ContactReducer from "./ContaxtReducer";
import { ReqContact } from "../../utils/interfaces";
import {
    CLOSE_ERROR_ALERT,
    CLOSE_SUCCESS_ALERT,
    ERROR_CONTACT,
    SUCCESS_CONTACT,
} from "../types";
import ContactContext from "./ContactContext";
import { checkValues, emailIsValid, valuesIsValid } from "../../utils/Checks";
const ContactState = (props: any) => {
    const proxy = process.env.REACT_APP_PROXY_URL || "https://www.moonlook-backend.tk";

    const initialState = {
        success: false,
        error: false,
        success_message: "",
        error_message: "",
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    const sendContact = async (req: ReqContact) => {
        try {
            const campsChecked = checkValues(
                req.nombre,
                req.apellido,
                req.email,
                req.description,
                req.choose
            );
            if (campsChecked) {
                errorContact(
                    "Por favor envie los typos correctos de cada campo."
                );
                return false;
            }
            const emailChecked = emailIsValid(req.email);
            if (emailChecked) {
                errorContact("Por favor envie un email valido.");
                return false;
            }
            const valuesChecked = valuesIsValid(
                req.nombre,
                req.apellido,
                req.choose,
                req.description
            );
            if (valuesChecked) {
                errorContact("Por favor envie informacion valida.");
                return false;
            }
            const resp = await axios.post(`${proxy}/contact`, {
                name: `${req.nombre} ${req.apellido}`,
                email: req.email,
                choose: req.choose,
                description: req.description,
            });
            if (resp.data.succes === true) {
                successContact("Su mensaje ha sido enviado con exito.");
                return true;
            }
        } catch (e) {
            errorContact("Error al enviar su mensaje, intente mas tarde.");
            return false;
        }
    };
    const successContact = (message: string) => {
        dispatch({ type: SUCCESS_CONTACT, payload: message });
    };
    const errorContact = (message: string) => {
        dispatch({ type: ERROR_CONTACT, payload: message });
    };
    const closeErrorAlert = () => {
        dispatch({ type: CLOSE_ERROR_ALERT, payload: null });
    };
    const closeSuccessAlert = () => {
        dispatch({ type: CLOSE_SUCCESS_ALERT, payload: null });
    };
    return (
        <ContactContext.Provider
            value={{
                contact: state,
                sendContact,
                successContact,
                errorContact,
                closeErrorAlert,
                closeSuccessAlert,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;

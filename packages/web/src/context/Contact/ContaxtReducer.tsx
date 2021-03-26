/* eslint-disable import/no-anonymous-default-export */
import { ERROR_CONTACT, SUCCESS_CONTACT, CLOSE_CONTACT_ALERT } from "../types";

export default (state: any, action: { payload: any; type: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { payload, type } = action;

    switch (type) {
        case ERROR_CONTACT:
            return {
                ...state,
                success: false,
                error: true,
                message: payload,
            };
        case SUCCESS_CONTACT:
            return {
                ...state,
                success: true,
                error: false,
                message: payload,
            };
        case CLOSE_CONTACT_ALERT:
            return {
                ...state,
                success: false,
                error: false,
                message: "",
            };
    }
};

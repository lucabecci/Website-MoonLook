/* eslint-disable import/no-anonymous-default-export */
import {
    ERROR_CONTACT,
    SUCCESS_CONTACT,
    CLOSE_ERROR_ALERT,
    CLOSE_SUCCESS_ALERT,
} from "../types";

export default (state: any, action: { payload: any; type: any }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { payload, type } = action;

    switch (type) {
        case ERROR_CONTACT:
            return {
                ...state,
                success: false,
                error: true,
                error_message: payload,
            };
        case SUCCESS_CONTACT:
            return {
                ...state,
                success: true,
                error: false,
                success_message: payload,
            };
        case CLOSE_ERROR_ALERT:
            return {
                ...state,
                error: false,
                error_message: "",
            };
        case CLOSE_SUCCESS_ALERT:
            return {
                ...state,
                success: false,
                success_message: "",
            };
    }
};

import { mailConstants } from "../../_constants";

export const getMailTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case mailConstants.GETMAILTYPE_REQUEST:
            return {
                loading: true,
            };
        case mailConstants.GETMAILTYPE_SUCCESS:
            return {
                status: action.response.status,
                mailTypes: action.response.mailTypes,
                message: action.response.message,
            };
        case mailConstants.GETMAILTYPE_FAILURE:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        default:
            return state;
    }
};

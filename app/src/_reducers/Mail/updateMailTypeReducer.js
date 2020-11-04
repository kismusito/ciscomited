import { mailConstants } from "../../_constants";

export const updateMailTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case mailConstants.UPDATEMAILTYPE_REQUEST:
            return {
                loading: true,
            };
        case mailConstants.UPDATEMAILTYPE_SUCCESS:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        case mailConstants.UPDATEMAILTYPE_FAILURE:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        default:
            return state;
    }
};

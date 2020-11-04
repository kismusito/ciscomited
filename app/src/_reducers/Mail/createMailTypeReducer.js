import { mailConstants } from "../../_constants";

export const createMailTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case mailConstants.CREATEMAILTYPE_REQUEST:
            return {
                loading: true,
            };
        case mailConstants.CREATEMAILTYPE_SUCCESS:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        case mailConstants.CREATEMAILTYPE_FAILURE:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        default:
            return state;
    }
};

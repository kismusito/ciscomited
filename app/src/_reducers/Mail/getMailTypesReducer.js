import { mailConstants } from "../../_constants";

export const getMailTypesReducer = (state = {}, action) => {
    switch (action.type) {
        case mailConstants.GETMAILTYPES_REQUEST:
            return {
                loading: true,
            };
        case mailConstants.GETMAILTYPES_SUCCESS:
            return {
                status: action.response.status,
                mailTypes: action.response.mailTypes,
                message: action.response.message,
            };
        case mailConstants.GETMAILTYPES_FAILURE:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        default:
            return state;
    }
};

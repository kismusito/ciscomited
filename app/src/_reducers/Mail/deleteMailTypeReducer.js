import { mailConstants } from "../../_constants";

export const deleteMailTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case mailConstants.DELETEMAILTYPE_REQUEST:
            return {
                loading: true,
            };
        case mailConstants.DELETEMAILTYPE_SUCCESS:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        case mailConstants.DELETEMAILTYPE_FAILURE:
            return {
                status: action.response.status,
                message: action.response.message,
            };
        default:
            return state;
    }
};

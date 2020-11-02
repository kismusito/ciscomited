import { minuteConstant } from "../_constants";
import { minuteService } from "../services";

export const minuteActions = {
    getAttendees,
};

function getAttendees(key) {
    return (dispatch) => {
        dispatch(request());

        minuteService
            .getAttendess(key)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));
                } else {
                    dispatch(failure(response));
                }
            })
            .catch((err) => {
                dispatch(failure(err));
            });
    };

    function request() {
        return { type: minuteConstant.GETATTENDEES_REQUEST };
    }
    function success(response) {
        return { type: minuteConstant.GETATTENDEES_SUCCESS, response };
    }
    function failure(response) {
        return { type: minuteConstant.GETATTENDEES_FAILURE, response };
    }
}

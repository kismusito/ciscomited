import { uploadConstants , solicityConstants} from "../_constants";
import { uploadService } from "../services";

export const uploadActions = {
    uploadApprentices,
    hideAlert,
    uploadInstructors,
    uploadNewFileSolicity,
    getDrawSolicity
};

function uploadApprentices(form) {
    return (dispatch) => {
        dispatch(request());

        uploadService
            .uploadAppretices(form)
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
        return { type: uploadConstants.APPRENTICESUPLOAD_REQUEST };
    }
    function success(response) {
        return { type: uploadConstants.APPRENTICESUPLOAD_SUCCESS, response };
    }
    function failure(response) {
        return { type: uploadConstants.APPRENTICESUPLOAD_FAILURE, response };
    }
}

function uploadInstructors(form) {
    return (dispatch) => {
        dispatch(request());

        uploadService
            .uploadInstructors(form)
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
        return { type: uploadConstants.APPRENTICESUPLOAD_REQUEST };
    }
    function success(response) {
        return { type: uploadConstants.APPRENTICESUPLOAD_SUCCESS, response };
    }
    function failure(response) {
        return { type: uploadConstants.APPRENTICESUPLOAD_FAILURE, response };
    }
}

function uploadNewFileSolicity(form , solicityID) {
    return (dispatch) => {
        dispatch(request());

        uploadService
            .uploadNewFileSolicity(form , solicityID)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));
                    setTimeout(_ => {
                        dispatch(clear());
                    } , 500)
                } else {
                    dispatch(failure(response));
                }
            })
            .catch((err) => {
                dispatch(failure(err));
            });
    };

    function request() {
        return { type: uploadConstants.UPLOADNEWFILESOLICITY_REQUEST };
    }
    function success(response) {
        return { type: uploadConstants.UPLOADNEWFILESOLICITY_SUCCESS, response };
    }
    function failure(response) {
        return { type: uploadConstants.UPLOADNEWFILESOLICITY_FAILURE, response };
    }
    function clear() {
        return { type: uploadConstants.UPLOADNEWFILESOLICITY_CLEAR };
    }
}

function getDrawSolicity() {
    return (dispatch) => {
        dispatch(request());

        uploadService
            .getDrawSolicity()
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
        return { type: solicityConstants.GETSOLICITYDRAW_REQUEST };
    }
    function success(response) {
        return { type: uploadConstants.UPLOADNEWFILESOLICITY_SUCCESS, response };
    }
    function failure(response) {
        return { type: solicityConstants.GETSOLICITYDRAW_FAILURE, response };
    }
}

function hideAlert() {
    return (dispatch) => {
        dispatch(hideAlert());
    };

    function hideAlert() {
        return { type: uploadConstants.UPLOADALERT_HIDE };
    }
}

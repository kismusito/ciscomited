import { uploadConstants, solicityConstants } from "../_constants";
import { solicityService } from "../services";
import { history } from "../helpers";

export const solicityActions = {
    getDrawSolicity,
    getMotiveOrProhibitions,
    saveMotiveOrProhibitions,
    saveSolicity,
    getSolicities,
};

function getDrawSolicity() {
    return (dispatch) => {
        dispatch(request());

        solicityService
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

function getSolicities() {
    return (dispatch) => {
        dispatch(request());

        solicityService
            .getSolicites()
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
        return { type: solicityConstants.GETSOLICITIES_REQUEST };
    }
    function success(response) {
        return { type: solicityConstants.GETSOLICITIES_SUCCESS, response };
    }
    function failure(response) {
        return { type: solicityConstants.GETSOLICITIES_FAILURE, response };
    }
}

function getMotiveOrProhibitions() {
    return (dispatch) => {
        dispatch(request());

        solicityService
            .getMotivesOrProhibitions()
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
        return { type: solicityConstants.GETMOTIVESORPROHIBITIONS_REQUEST };
    }
    function success(response) {
        return { type: solicityConstants.GETMOTIVESORPROHIBITIONS_SUCCESS, response };
    }
    function failure(response) {
        return { type: solicityConstants.GETMOTIVESORPROHIBITIONS_FAILURE, response };
    }
}

function saveMotiveOrProhibitions(data) {
    return (dispatch) => {
        dispatch(request());

        solicityService
            .saveMotivesOrProhibitions(data)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));
                    setTimeout((_) => {
                        dispatch(finish());
                    }, 1000);
                    solicityService
                        .getMotivesOrProhibitions()
                        .then((response) => {
                            if (response.status) {
                                dispatch(successSecondAction(response));
                            } else {
                                dispatch(failureSecondAction(response));
                            }
                        })
                        .catch((err) => {
                            dispatch(failureSecondAction(err));
                        });
                } else {
                    dispatch(failure(response));
                }
            })
            .catch((err) => {
                dispatch(failure(err));
            });
    };

    function request() {
        return { type: solicityConstants.SAVEMOTIVESORPROHIBITIONS_REQUEST };
    }
    function success(response) {
        return { type: solicityConstants.SAVEMOTIVESORPROHIBITIONS_SUCCESS, response };
    }
    function failure(response) {
        return { type: solicityConstants.SAVEMOTIVESORPROHIBITIONS_FAILURE, response };
    }
    function finish(response) {
        return { type: solicityConstants.SAVEMOTIVESORPROHIBITIONS_FINISH, response };
    }

    function successSecondAction(response) {
        return { type: solicityConstants.GETMOTIVESORPROHIBITIONS_SUCCESS, response };
    }
    function failureSecondAction(response) {
        return { type: solicityConstants.GETMOTIVESORPROHIBITIONS_FAILURE, response };
    }
}

function saveSolicity(data) {
    return (dispatch) => {
        dispatch(request());

        solicityService
            .saveSolicity(data)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));

                    setTimeout((_) => {
                        dispatch(finish());
                        history.push("/solicities");
                    }, 1500);
                } else {
                    dispatch(failure(response));
                }
            })
            .catch((err) => {
                dispatch(failure(err));
            });
    };

    function request() {
        return { type: solicityConstants.SAVESOLICITY_REQUEST };
    }
    function success(response) {
        return { type: solicityConstants.SAVESOLICITY_SUCCESS, response };
    }
    function failure(response) {
        return { type: solicityConstants.SAVESOLICITY_FAILURE, response };
    }
    function finish() {
        return { type: solicityConstants.SAVESOLICITY_FINISH };
    }
}

import { mailConstants } from "../_constants";
import { mailService } from "../services";

export const mailActions = {
    getMail,
    getMails,
    getMailType,
    getMailTypes,
    createMail,
    createMailType,
    updateMail,
    updateMailType,
    deleteMail,
    deleteMailType,
};

function getMail(mailID) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .getMail(mailID)
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
        return { type: mailConstants.GETMAIL_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.GETMAIL_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.GETMAIL_FAILURE, response };
    }
}

function getMails() {
    return (dispatch) => {
        dispatch(request());

        mailService
            .getMails()
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
        return { type: mailConstants.GETMAILS_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.GETMAILS_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.GETMAILS_FAILURE, response };
    }
}

function getMailType(mailTypeID) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .getMailType(mailTypeID)
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
        return { type: mailConstants.GETMAILTYPE_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.GETMAILTYPE_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.GETMAILTYPE_FAILURE, response };
    }
}

function getMailTypes() {
    return (dispatch) => {
        dispatch(request());

        mailService
            .getMailTypes()
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
        return { type: mailConstants.GETMAILTYPES_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.GETMAILTYPES_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.GETMAILTYPES_FAILURE, response };
    }
}

function createMail(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .createMail(data)
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
        return { type: mailConstants.CREATEMAIL_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.CREATEMAIL_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.CREATEMAIL_FAILURE, response };
    }
}

function createMailType(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .createMailType(data)
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
        return { type: mailConstants.CREATEMAILTYPE_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.CREATEMAILTYPE_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.CREATEMAILTYPE_FAILURE, response };
    }
}

function updateMail(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .updateMail(data)
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
        return { type: mailConstants.UPDATEMAIL_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.UPDATEMAIL_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.UPDATEMAIL_FAILURE, response };
    }
}

function updateMailType(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .updateMailType(data)
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
        return { type: mailConstants.UPDATEMAILTYPE_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.UPDATEMAILTYPE_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.UPDATEMAILTYPE_FAILURE, response };
    }
}

function deleteMail(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .deleteMail(data)
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
        return { type: mailConstants.DELETEMAIL_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.DELETEMAIL_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.DELETEMAIL_FAILURE, response };
    }
}

function deleteMailType(data) {
    return (dispatch) => {
        dispatch(request());

        mailService
            .deleteMailType(data)
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
        return { type: mailConstants.DELETEMAILTYPE_REQUEST };
    }
    function success(response) {
        return { type: mailConstants.DELETEMAILTYPE_SUCCESS, response };
    }
    function failure(response) {
        return { type: mailConstants.DELETEMAILTYPE_FAILURE, response };
    }
}

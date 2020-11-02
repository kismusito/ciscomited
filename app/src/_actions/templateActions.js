import { templateConstants } from "../_constants";
import { templateService } from "../services";

export const templateActions = {
    getCustomFields,
    showModal,
    hideModal,
    createTemplate,
    getTemplates,
};

function getCustomFields(type) {
    return (dispatch) => {
        dispatch(request());

        templateService
            .getCustomFields(type)
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
        return { type: templateConstants.GETCUSTOMFIELDS_REQUEST };
    }
    function success(response) {
        return { type: templateConstants.GETCUSTOMFIELDS_SUCCESS, response };
    }
    function failure(response) {
        return { type: templateConstants.GETCUSTOMFIELDS_FAILURE, response };
    }
}

function getTemplates() {
    return (dispatch) => {
        dispatch(request());

        templateService
            .getTemplates()
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
        return { type: templateConstants.GETTEMPLATES_REQUEST };
    }
    function success(response) {
        return { type: templateConstants.GETTEMPLATES_SUCCESS, response };
    }
    function failure(response) {
        return { type: templateConstants.GETTEMPLATES_FAILURE, response };
    }
}

function createTemplate(data) {
    return (dispatch) => {
        dispatch(request());

        templateService
            .createTemplate(data)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));

                    templateService
                        .getTemplates()
                        .then((response) => {
                            if (response.status) {
                                dispatch(successTemplate(response));
                            } else {
                                dispatch(failureTemplate(response));
                            }
                        })
                        .catch((err) => {
                            dispatch(failureTemplate(err));
                        });

                    setTimeout((_) => {
                        dispatch(finish());
                    }, 1600);
                } else {
                    dispatch(failure(response));
                }
            })
            .catch((err) => {
                dispatch(failure(err));
            });
    };

    function request() {
        return { type: templateConstants.CREATETEMPLATE_REQUEST };
    }
    function finish() {
        return { type: templateConstants.FINISH_CREATE_TEMPLATE };
    }
    function success(response) {
        return { type: templateConstants.CREATETEMPLATE_SUCCESS, response };
    }
    function failure(response) {
        return { type: templateConstants.CREATETEMPLATE_FAILURE, response };
    }
    function successTemplate(response) {
        return { type: templateConstants.GETTEMPLATES_SUCCESS, response };
    }
    function failureTemplate(response) {
        return { type: templateConstants.GETTEMPLATES_FAILURE, response };
    }
}

function showModal() {
    return (dispatch) => {
        dispatch(show());
    };

    function show() {
        return { type: templateConstants.SHOWMODAL };
    }
}

function hideModal() {
    return (dispatch) => {
        dispatch(hide());
    };

    function hide() {
        return { type: templateConstants.HIDEMODAL };
    }
}

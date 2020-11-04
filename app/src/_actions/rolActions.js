import { rolConstant } from "../_constants";
import { roleService } from "../services";

export const rolActions = {
    getRoleInfo,
    getAllRoles,
    addRol,
    getCapacities
}

function getRoleInfo(roleID) {
    return (dispatch) => {
        dispatch(request());

        roleService
            .getUserRole(roleID)
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
        return { type: rolConstant.GETROLINFO_REQUEST };
    }
    function success(response) {
        return { type: rolConstant.GETROLINFO_SUCCESS, response };
    }
    function failure(response) {
        return { type: rolConstant.GETROLINFO_FAILURE, response };
    }
}

function getAllRoles() {
    return (dispatch) => {
        dispatch(request());

        roleService
            .getAllRoles()
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
        return { type: rolConstant.GETROLES_REQUEST };
    }
    function success(response) {
        return { type: rolConstant.GETROLES_SUCCESS, response };
    }
    function failure(response) {
        return { type: rolConstant.GETROLES_FAILURE, response };
    }
}

function addRol(rolData) {
    return (dispatch) => {
        dispatch(request());

        roleService
            .addNewRol(rolData)
            .then((response) => {
                if (response.status) {
                    dispatch(success(response));
                    roleService
                        .getAllRoles()
                        .then((response) => {
                            if (response.status) {
                                dispatch(successRoles(response));
                                setTimeout((_) => {
                                    dispatch(request());
                                }, 1500);
                            } else {
                                dispatch(failureRoles(response));
                                setTimeout((_) => {
                                    dispatch(request());
                                }, 1500);
                            }
                        })
                        .catch((err) => {
                            dispatch(failureRoles(err));
                            setTimeout((_) => {
                                dispatch(request());
                            }, 1500);
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
        return { type: rolConstant.ADDROLES_REQUEST };
    }
    function success(response) {
        return { type: rolConstant.ADDROLES_SUCCESS, response };
    }
    function failure(response) {
        return { type: rolConstant.ADDROLES_FAILURE, response };
    }
    function successRoles(response) {
        return { type: rolConstant.GETROLES_SUCCESS, response };
    }
    function failureRoles(response) {
        return { type: rolConstant.GETROLES_FAILURE, response };
    }
}

function getCapacities() {
    return (dispatch) => {
        dispatch(request());

        roleService
            .getCapacities()
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
        return { type: rolConstant.GETROLCAPACITIES_REQUEST };
    }
    function success(response) {
        return { type: rolConstant.GETROLCAPACITIES_SUCCESS, response };
    }
    function failure(response) {
        return { type: rolConstant.GETROLCAPACITIES_FAILURE, response };
    }
}
import { combineReducers } from "redux";
import { userConstants } from "../_constants";

import { citationSelectedReducer, citationsReducer, generateConstantReducer } from "./Citations";
import { addRoleReducer, getRolInfoReducer, getRoleCapacitiesReducer, roleReducer } from "./Role";
import { uploadNewStatusCitation, uploadReducer, uploadSolicityFilesReducer } from "./Upload";
import { registerUserReducer, authReducer } from "./Auth";
import { chagePasswordReducer, editProfileReducer, editUserSearchReducer } from "./Edit";
import { getAppreticeInfoReducer, saveAppreticeInfoReducer } from "./Appretice";
import { getAttendeesReducer } from "./Minute";
import {
    getCustomFieldsReducer,
    templateModalReducer,
    createTemplateReducer,
    templatesReducer,
} from "./Template";
import {
    searchReducer,
    searchUsersReducer,
    searchedUserReducer,
    apreticeSearchedReducer,
} from "./Search";
import {
    getMotivesOrProhibitionsReducer,
    saveMotiveOrProhibitionReducer,
    saveSolicityReducer,
    getSolicitiesReducer,
    updateSolicityStatusReducer,
    getSolicityReducer,
    getSolicityDrawReducer,
} from "./Solicity";

const rootReducer = combineReducers({
    authReducer,
    editProfileReducer,
    roleReducer,
    addRoleReducer,
    registerUserReducer,
    getRolInfoReducer,
    searchUsersReducer,
    searchedUserReducer,
    editUserSearchReducer,
    uploadReducer,
    searchReducer,
    apreticeSearchedReducer,
    generateConstantReducer,
    citationsReducer,
    citationSelectedReducer,
    uploadNewStatusCitation,
    chagePasswordReducer,
    getRoleCapacitiesReducer,
    uploadSolicityFilesReducer,
    getSolicityDrawReducer,
    getAppreticeInfoReducer,
    saveAppreticeInfoReducer,
    getMotivesOrProhibitionsReducer,
    saveMotiveOrProhibitionReducer,
    saveSolicityReducer,
    getSolicitiesReducer,
    updateSolicityStatusReducer,
    getSolicityReducer,
    getCustomFieldsReducer,
    templateModalReducer,
    createTemplateReducer,
    templatesReducer,
    getAttendeesReducer,
});

export default (state, action) =>
    rootReducer(action.type === userConstants.USER_LOGOUT ? undefined : state, action);

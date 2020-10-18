import { combineReducers } from "redux";
import { userConstants } from "../_constants";
import { authReducer } from "./authReducer";
import { editProfileReducer } from "./editProfileReducer";
import { roleReducer } from "./rolesReducer";
import { addRoleReducer } from "./addRoleReducer";
import { registerUserReducer } from "./registerUserReducer";
import { getRolInfoReducer } from "./getRoleInfoReducer";
import { getRoleCapacitiesReducer } from "./getRoleCapacitiesReducer";
import { searchUsersReducer } from "./searchUsersReducer";
import { searchedUserReducer } from "./searchedUserReducer";
import { editUserSearchReducer } from "./editUserReducer";
import { uploadReducer } from "./uploadReducer";
import { searchReducer } from "./searchReducer";
import { apreticeSearchedReducer } from "./appreticeSearchedReducer";
import { generateConstantReducer } from "./generateConstantReducer";
import { citationsReducer } from "./citationsReducer";
import { citationSelectedReducer } from "./citationSelectedReducer";
import { uploadNewStatusCitation } from "./uploadNewStatusCitation";
import { chagePasswordReducer } from "./chagePasswordReducer";
import { uploadSolicityFilesReducer } from "./uploadSolicityFilesReducer";
import { getSolicityDrawReducer } from "./getDrawsSolicityReducer";
import { getAppreticeInfoReducer } from "./getAppreticeInfoReducer";
import { saveAppreticeInfoReducer } from "./saveAppreticeInfoReducer";
import { getMotivesOrProhibitionsReducer, saveMotiveOrProhibitionReducer } from "./Solicity";

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
});

export default (state, action) =>
    rootReducer(action.type === userConstants.USER_LOGOUT ? undefined : state, action);

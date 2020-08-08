import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {editProfileReducer} from './editProfileReducer'
import {roleReducer} from './rolesReducer'
import {addRoleReducer} from './addRoleReducer'
import {registerUserReducer} from './registerUserReducer'
import {getRolInfoReducer} from './getRoleInfoReducer'
import {searchUsersReducer} from './searchUsersReducer'
import {searchedUserReducer} from './searchedUserReducer'
import {editUserSearchReducer} from './editUserReducer'
import {uploadReducer} from './uploadReducer'
import {searchReducer} from './searchReducer'

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
    searchReducer
})

export default rootReducer;
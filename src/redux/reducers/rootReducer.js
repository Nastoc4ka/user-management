import {combineReducers} from 'redux';
import profileEditReducer from "./profileEditReducer";
import profilesReducer from "./profilesReducer";
import usersReducer from "./usersReducer";
import dashboardReducer from "./dashboardReducer";
import messageReducer from "./messageReducer";
import authRegisterReducer from "./authRegisterReducer";
import authLoginReducer from "./authLoginReducer";
import displayProfileCreateReducer from "./displayProfileCreateReducer";


export const rootReducer = combineReducers({
    profileEditReducer,
    profilesReducer,
    messageReducer,
    authLoginReducer,
    authRegisterReducer,
    displayProfileCreateReducer,
    usersReducer,
    dashboardReducer
});
import {combineReducers} from 'redux';
import habitEditReducer from "./habitEditReducer";
import habitsReducer from "./habitsReducer";
import categoryReducer from "./categoryReducer";
import statisticsReducer from "./statisticsReducer";
import doneAlertReducer from "./doneAlertReducer";
import messageReducer from "./messageReducer";
import authRegisterReducer from "./authRegisterReducer";
import authLoginReducer from "./authLoginReducer";
import displayCategoryCreateReducer from "./displayCategoryCreateReducer";
import displayHabitCreateReducer from "./displayHabitCreateReducer";


export const rootReducer = combineReducers({
    habitEditReducer,
    habitsReducer,
    categoryReducer,
    statisticsReducer,
    doneAlertReducer,
    messageReducer,
    authLoginReducer,
    authRegisterReducer,
    displayCategoryCreateReducer,
    displayHabitCreateReducer,
});
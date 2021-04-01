import {combineReducers} from 'redux';
import habitEditReducer from "./habitEditReducer";
import habitsReducer from "./habitsReducer";
import categoryReducer from "./categoryReducer";
import statisticsReducer from "./statisticsReducer";
import doneAlertReducer from "./doneAlertReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
    habitEditReducer,
    habitsReducer,
    categoryReducer,
    statisticsReducer,
    doneAlertReducer,
    messageReducer,
    authReducer
});
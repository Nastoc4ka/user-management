import {combineReducers} from 'redux';
import showInputReducer from "./showInput";
//import reducer from "./index";
import showLoaderReducer from "./showLoader";
import showErrorReducer from "./showError";
import habitsReducer from "./showHabits";


export const rootReducer = combineReducers({
    //reducer,
    showInputReducer,
    showLoaderReducer,
    showErrorReducer,
    habitsReducer
});
import {combineReducers} from 'redux';
import showInputReducer from "./showInput";
//import reducer from "./index";
import showLoaderReducer from "./showLoader";
import showErrorReducer from "./showError";
import habitsReducer from "./showHabits";
import categoryReducer from "./categoryReducer";


export const rootReducer = combineReducers({
    showInputReducer,
    showLoaderReducer,
    showErrorReducer,
    habitsReducer,
    categoryReducer,
});
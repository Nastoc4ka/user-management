import {combineReducers} from 'redux';
import habitEditReducer from "./habitEditReducer";
//import reducer from "./index";
import habitsReducer from "./habitsReducer";
import categoryReducer from "./categoryReducer";


export const rootReducer = combineReducers({
    habitEditReducer,
    habitsReducer,
    categoryReducer,
});
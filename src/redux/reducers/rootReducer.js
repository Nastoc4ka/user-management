import {combineReducers} from 'redux';
import habitEditReducer from "./habitEditReducer";
import habitsReducer from "./habitsReducer";
import categoryReducer from "./categoryReducer";
import statisticsReducer from "./statisticsReducer";
import doneAlert from "./doneAlert";


export const rootReducer = combineReducers({
    habitEditReducer,
    habitsReducer,
    categoryReducer,
    statisticsReducer,
    doneAlert
});
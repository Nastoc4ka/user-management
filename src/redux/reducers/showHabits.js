import {FETCH_HABITS_HIDE, FETCH_HABITS_SUCCESS} from "../actions/types";

const initialState = {
    habits: [],
};

const habitsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_HABITS_HIDE:
            return {
                habits: [],
            };
        case FETCH_HABITS_SUCCESS:
            return {
                habits: action.payload,

            };
        default:
            return state
    }
};

export default habitsReducer
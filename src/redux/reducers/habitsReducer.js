import {HABITS_ERROR, HABITS_FETCHED, HABITS_LOADING} from "../actions/types";

const initialState = {
    habits: [],
    loading: false,
    error: null
};

const habitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HABITS_LOADING:
            return {
                habits: [],
                loading: true,
                error: null
            };
        case HABITS_FETCHED:
            return {
                habits: action.payload,
                loading: false,
                error: null
            };
        case HABITS_ERROR:
            return {
                habits: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default habitsReducer
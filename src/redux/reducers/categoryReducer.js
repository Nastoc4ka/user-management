import {CATEGORIES_ERROR, CATEGORIES_FETCHED, CATEGORIES_LOADING} from "../actions/types";

const initialState = {
    loadingHabit: false,
    categories: [],
    error: null
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return {
                loadingHabit: true,
                categories: [],
                error: null
            };
        case CATEGORIES_FETCHED:
            return {
                loadingHabit: false,
                categories: action.payload,
                error: null
            };
        case CATEGORIES_ERROR:
            return {
                loadingHabit: false,
                categories: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default categoryReducer
import {FETCH_CATEGORIES_HIDE, FETCH_CATEGORIES_SUCCESS} from "../actions/types";

const initialState = {
    categories: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_HIDE:
            return {
                categories: [],
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                categories: action.payload,

            };
        default:
            return state
    }
};

export default categoryReducer
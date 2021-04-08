import {CATEGORIES_ERROR, CATEGORIES_FETCHED, CATEGORIES_LOADING, CATEGORY_CREATED,} from "../actions/types";

const initialState = {
    loading: false,
    categories: [],
    error: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return {
                loading: true,
                categories: [],
                error: null
            };
        case CATEGORIES_FETCHED:
            return {
                loading: false,
                categories: action.payload,
                error: null
            };
        case CATEGORY_CREATED:
            return {
                categories: [...state.categories, action.payload],
                loading: false,
                error: null,
            };
        case CATEGORIES_ERROR:
            return {
                loading: false,
                categories: [],
                error: action.payload
            };
        default:
            return state
    }
};

export default categoryReducer
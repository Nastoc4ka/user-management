import {HIDE_ERROR, SHOW_ERROR} from "../actions/types";

const initialState = {
    error: null
};

const showErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                error: action.payload
            };
        case HIDE_ERROR:
            return {
                error: null
            };
        default:
            return state
    }
};

export default showErrorReducer
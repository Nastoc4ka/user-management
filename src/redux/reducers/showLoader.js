import {HIDE_LOADER, SHOW_LOADER} from "../actions/types";

const initialState = {
    loading: false,
};

const showLoaderReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_LOADER:
            return {
                loading: true,
            };
        case HIDE_LOADER:
            return {
                loading: false,
            };
        default:
            return state
    }
};

export default showLoaderReducer
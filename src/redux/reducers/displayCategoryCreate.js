import {HIDE_CATEGORY_CREATE, SHOW_CATEGORY_CREATE} from "../actions/types";

const initialState = {
    display: false,
};

const displayCategoryCreateReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case SHOW_CATEGORY_CREATE:
            return {
                display: true,
            };
        case HIDE_CATEGORY_CREATE:
            return {
                display: false,
            };
        default:
            return state
    }
};

export default displayCategoryCreateReducer
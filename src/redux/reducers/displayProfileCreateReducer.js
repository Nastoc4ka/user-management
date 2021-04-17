import {HIDE_PROFILE_CREATION, SHOW_PROFILE_CREATION} from "../actions/types";

const initialState = {
    display: false,
};

const displayProfileCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE_CREATION:
            return {
                display: true,
            };
        case HIDE_PROFILE_CREATION:
            return {
                display: false,
            };
        default:
            return state
    }
};

export default displayProfileCreateReducer
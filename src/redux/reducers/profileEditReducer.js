import {PROFILE_EDIT_HIDE, PROFILE_EDIT_SHOW} from "../actions/types";

const initialState = {
    selectedId: ''
};

const profileEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_EDIT_SHOW:
            return {
                selectedId: action.payload
            };
        case PROFILE_EDIT_HIDE:
            return {
                selectedId: ''
            };
        default:
            return state
    }
};

export default profileEditReducer
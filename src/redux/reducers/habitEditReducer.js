import {HABIT_EDIT_HIDE, HABIT_EDIT_SHOW} from "../actions/types";

const initialState = {
    selectedId: ''
};

const habitEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case HABIT_EDIT_SHOW:
            return {
                selectedId: action.payload
            };
        case HABIT_EDIT_HIDE:
            return {
                selectedId: ''
            };
        default:
            return state
    }
};

export default habitEditReducer
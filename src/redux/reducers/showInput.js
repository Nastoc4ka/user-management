import {HIDE_INPUT, SHOW_INPUT} from "../actions/types";

const initialState = {
    showInputId: ''
};

const showInputReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INPUT:
            return {
                showInputId: action.payload
            };
        case HIDE_INPUT:
            return {
                showInputId: ''
            };
        default:
            return state
    }
};

export default showInputReducer
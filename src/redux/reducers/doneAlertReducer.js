import {HABIT_DONE_HIDE_ALERT, HABIT_DONE_SHOW_ALERT} from "../actions/types";

const initialState = {
    alertMarkDoneId: ''
};

const doneAlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case HABIT_DONE_SHOW_ALERT:
            return {
                alertMarkDoneId: action.payload
            };
        case HABIT_DONE_HIDE_ALERT:
            return {
                alertMarkDoneId: ''
            };
        default:
            return state
    }
};

export default doneAlertReducer
import {HIDE_HABIT_CREATE, SHOW_HABIT_CREATE} from "../actions/types";

const initialState = {
    display: false,
};

const displayHabitCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HABIT_CREATE:
            return {
                display: true,
            };
        case HIDE_HABIT_CREATE:
            return {
                display: false,
            };
        default:
            return state
    }
};

export default displayHabitCreateReducer
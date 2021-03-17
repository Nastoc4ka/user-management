import {FETCH_HABITS_FAILURE, FETCH_HABITS_REQUEST, FETCH_HABITS_SUCCESS} from "../actions/types";

const initialState = {
    habits: [],
    showInput: ''
};

const reducer = (state = initialState, action) => {
    console.log('action in reducer: ' + JSON.stringify(action));

    switch (action.type) {
        case FETCH_HABITS_REQUEST:
            return {
                ...state,
                habits: [],
                loading: true,
                error: null
            };
        case FETCH_HABITS_SUCCESS:
            return {
                ...state,
                showInput: '',
                habits: action.payload,
                loading: false,
                error: null
            };
        case FETCH_HABITS_FAILURE:
            return {
                ...state,
                habits: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer
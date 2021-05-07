import {USERS_ERROR, USERS_FETCHED, USERS_LOADING} from "../actions/types";

const initialState = {
    loading: true,
    users: [],
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOADING:
            return {
                users: [],
                loading: true,
                error: null
            };
        case USERS_FETCHED:
            return {
                users: action.payload,
                loading: false,
                error: null
            };
        case USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default usersReducer
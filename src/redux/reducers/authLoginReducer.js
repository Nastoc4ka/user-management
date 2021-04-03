import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT,} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

const authLoginReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                user: payload,
            };
        case LOGIN_FAIL:
            return {
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authLoginReducer;
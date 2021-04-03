import {REGISTER_FAIL, REGISTER_INIT, REGISTER_LOADING, REGISTER_SUCCESS} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    registeredSuccessful: false
};

const authRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_INIT:
            return {
                registeredSuccessful: false,
            };
        case REGISTER_LOADING:
            return {
                registeredSuccessful: false,
            };
        case REGISTER_FAIL:
            return {
                registeredSuccessful: false,
            };
        case REGISTER_SUCCESS:
            return {
                registeredSuccessful: true,
            };
        default:
            return state;
    }
};

export default authRegisterReducer;
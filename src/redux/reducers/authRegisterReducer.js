import {REGISTER_FAIL, REGISTER_INIT, REGISTER_LOADING, REGISTER_SUCCESS} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    registeredSuccessful: false,
    loadingEditProfile: false
};

const authRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_INIT:
            return {
                loadingEditProfile: false,
                registeredSuccessful: false,
            };
        case REGISTER_LOADING:
            return {
                loadingEditProfile: true,
                registeredSuccessful: false,
            };
        case REGISTER_FAIL:
            return {
                loadingEditProfile: false,
                registeredSuccessful: false,
            };
        case REGISTER_SUCCESS:
            return {
                loadingEditProfile: false,
                registeredSuccessful: true,
            };
        default:
            return state;
    }
};

export default authRegisterReducer;
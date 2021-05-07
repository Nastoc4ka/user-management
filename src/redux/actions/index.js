import {
    CATEGORIES_ERROR,
    CATEGORIES_FETCHED,
    CATEGORIES_LOADING,
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    CATEGORY_CREATED,
    CLEAR_MESSAGE,
    DASHBOARD_ERROR,
    DASHBOARD_FETCHED,
    DASHBOARD_LOADING,
    DASHBOARD_REQUESTED_SAGA,
    HABIT_DONE_HIDE_ALERT,
    HABIT_DONE_SAGA,
    HABIT_DONE_SHOW_ALERT,
    HIDE_CATEGORY_CREATE,
    HIDE_PROFILE_CREATION,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SAGA,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SAGA,
    PROFILE_CREATE_ERROR,
    PROFILE_CREATE_LOADING,
    PROFILE_CREATE_SAGA,
    PROFILE_CREATED,
    PROFILE_EDIT_HIDE,
    PROFILE_EDIT_SHOW,
    PROFILE_REMOVE_ERROR,
    PROFILE_REMOVE_LOADING,
    PROFILE_REMOVE_SAGA,
    PROFILE_REMOVED,
    PROFILE_UPDATE_ERROR,
    PROFILE_UPDATE_LOADING,
    PROFILE_UPDATE_SAGA,
    PROFILE_UPDATED,
    PROFILES_ERROR,
    PROFILES_FETCHED,
    PROFILES_LOADING,
    PROFILES_REQUESTED_SAGA,
    REGISTER_FAIL,
    REGISTER_INIT,
    REGISTER_LOADING,
    REGISTER_SAGA,
    REGISTER_SUCCESS,
    SET_MESSAGE,
    SHOW_CATEGORY_CREATE,
    SHOW_PROFILE_CREATION,
    STATISTICS_LOADED,
    STATISTICS_LOADING,
    USERS_ERROR,
    USERS_FETCHED,
    USERS_LOADING,
    USERS_REQUESTED_SAGA
} from "./types"

const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

const clearMessage = () => ({
    type: CLEAR_MESSAGE,
});

const registerSaga = (username, email, password, isAdmin) => {
    return {
        type: REGISTER_SAGA,
        payload: {username, email, password, isAdmin}
    }
};

const registerLoading = () => {
    return {
        type: REGISTER_LOADING
    }
};

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    }
};

const registerFail = () => {
    return {
        type: REGISTER_FAIL,
    }
};

const registerInit = () => {
    return {
        type: REGISTER_INIT,
    }
};

const loginSaga = (email, password) => {
    return {
        type: LOGIN_SAGA,
        payload: {email, password}
    }
};

const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    }
};

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
};

const loginFail = () => {
    return {
        type: LOGIN_FAIL,
    }
};

const logoutSaga = () => {

    return {
        type: LOGOUT_SAGA,
    };
};

const logout = () => {

    return {
        type: LOGOUT,
    };
};

const requestProfilesSaga = () => {
    return {
        type: PROFILES_REQUESTED_SAGA
    }
};

const profilesLoading = () => {
    return {
        type: PROFILES_LOADING,
    }
};

const profilesError = (error) => {
    return {
        type: PROFILES_ERROR,
        payload: error
    }
};

const profilesFetched = (profiles) => {
    return {
        type: PROFILES_FETCHED,
        payload: profiles
    }
};

const requestUsersSaga = () => {
    return {
        type: USERS_REQUESTED_SAGA
    }
};

const usersLoading = () => {
    return {
        type: USERS_LOADING,
    }
};

const usersError = (error) => {
    return {
        type: USERS_ERROR,
        payload: error
    }
};

const usersFetched = (profiles) => {
    return {
        type: USERS_FETCHED,
        payload: profiles
    }
};

const requestDashboardSaga = () => {
    return {
        type: DASHBOARD_REQUESTED_SAGA
    }
};

const dashboardLoading = () => {
    return {
        type: DASHBOARD_LOADING,
    }
};

const dashboardError = (error) => {
    return {
        type: DASHBOARD_ERROR,
        payload: error
    }
};

const dashboardFetched = (dashboardData) => {
    return {
        type: DASHBOARD_FETCHED,
        payload: dashboardData
    }
};

const profileEditShow = (id) => {
    return {
        type: PROFILE_EDIT_SHOW,
        payload: id
    }
};

const profileEditHide = () => {
    return {
        type: PROFILE_EDIT_HIDE,
    }
};

const profileUpdateLoading = () => {
    return {
        type: PROFILE_UPDATE_LOADING,
    }
};

const profileUpdateSaga = (profile) => {
    return {
        type: PROFILE_UPDATE_SAGA,
        payload: profile
    }
};

const profileUpdated = (profile) => {
    return {
        type: PROFILE_UPDATED,
        payload: profile
    }
};

const profileUpdateError = (error) => {
    return {
        type: PROFILE_UPDATE_ERROR,
        payload: error
    }
};

const profileRemoveSaga = (id) => {
    return {
        type: PROFILE_REMOVE_SAGA,
        payload: id
    }
};

const profileRemoveLoading = () => {
    return {
        type: PROFILE_REMOVE_LOADING,
    }
};

const profileRemoved = (id) => {
    return {
        type: PROFILE_REMOVED,
        payload: id
    }
};

const profileRemoveError = (error) => {
    return {
        type: PROFILE_REMOVE_ERROR,
        payload: error
    }
};

const profileCreateSaga = (newProfile) => {
    return {
        type: PROFILE_CREATE_SAGA,
        payload: newProfile
    }
};

const profileCreateLoading = () => {
    return {
        type: PROFILE_CREATE_LOADING,
    }
};

const profileCreated = (newProfile) => {
    return {
        type: PROFILE_CREATED,
        payload: newProfile
    }
};

const profileCreateError = (error) => {
    return {
        type: PROFILE_CREATE_ERROR,
        payload: error
    }
};

const showProfileCreation = () => {
    return {
        type: SHOW_PROFILE_CREATION,
    }
};

const hideProfileCreation = () => {
    return {
        type: HIDE_PROFILE_CREATION,
    }
};

export {
    loginSaga,
    loginLoading,
    loginSuccess,
    logoutSaga,
    logout,
    loginFail,
    registerInit,

    registerSaga,
    registerLoading,
    registerSuccess,
    registerFail,
    setMessage,
    clearMessage,


    profilesFetched,
    requestProfilesSaga,
    profileCreateSaga,
    profileEditShow,
    profileEditHide,
    profileRemoveSaga,
    profileRemoveLoading,
    profileRemoved,
    profileRemoveError,
    profileUpdateLoading,
    profileUpdateSaga,
    profileUpdateError,
    profileUpdated,
    showProfileCreation,
    hideProfileCreation,
    profileCreateLoading,
    profileCreated,
    profileCreateError,
    profilesLoading,
    profilesError,

    requestUsersSaga,
    usersLoading,
    usersFetched,
    usersError,

    dashboardFetched,
    dashboardError,
    dashboardLoading,
    requestDashboardSaga
};

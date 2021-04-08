import {
    CATEGORIES_ERROR,
    CATEGORIES_FETCHED,
    CATEGORIES_LOADING,
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    CATEGORY_CREATED,
    CLEAR_MESSAGE,
    HABIT_CREATE_ERROR,
    HABIT_CREATE_LOADING,
    HABIT_CREATE_SAGA,
    HABIT_CREATED,
    HABIT_DONE_HIDE_ALERT,
    HABIT_DONE_SAGA,
    HABIT_DONE_SHOW_ALERT,
    HABIT_EDIT_HIDE,
    HABIT_EDIT_SHOW,
    HABIT_REMOVE_ERROR,
    HABIT_REMOVE_LOADING,
    HABIT_REMOVE_SAGA,
    HABIT_REMOVED,
    HABIT_UPDATE_ERROR,
    HABIT_UPDATE_LOADING,
    HABIT_UPDATE_SAGA,
    HABIT_UPDATED,
    HABITS_ERROR,
    HABITS_FETCHED,
    HABITS_LOADING,
    HABITS_REQUESTED_SAGA,
    HIDE_CATEGORY_CREATE,
    HIDE_HABIT_CREATE,
    LOGIN_FAIL,
    LOGIN_SAGA,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SAGA,
    REGISTER_FAIL,
    REGISTER_INIT,
    REGISTER_SAGA,
    REGISTER_SUCCESS,
    SET_MESSAGE,
    SHOW_CATEGORY_CREATE,
    SHOW_HABIT_CREATE,
    STATISTICS_LOADED,
    STATISTICS_LOADING
} from "./types"

const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

const clearMessage = () => ({
    type: CLEAR_MESSAGE,
});

const registerSaga = (username, email, password) => {
    return {
        type: REGISTER_SAGA,
        payload: {username, email, password}
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

const loginSaga = (username, password) => {
    return {
        type: LOGIN_SAGA,
        payload: {username, password}
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

const requestHabitsSaga = () => {
    return {
        type: HABITS_REQUESTED_SAGA
    }
};

const habitsLoading = () => {
    return {
        type: HABITS_LOADING,
    }
};

const habitsError = (error) => {
    return {
        type: HABITS_ERROR,
        payload: error
    }
};

const habitsFetched = (habits) => {
    return {
        type: HABITS_FETCHED,
        payload: habits
    }
};

const habitEditShow = (id) => {
    return {
        type: HABIT_EDIT_SHOW,
        payload: id
    }
};

const habitEditHide = () => {
    return {
        type: HABIT_EDIT_HIDE,
    }
};

const habitUpdateLoading = () => {
    return {
        type: HABIT_UPDATE_LOADING,
    }
};

const habitUpdateSaga = (habit) => {
    return {
        type: HABIT_UPDATE_SAGA,
        payload: habit
    }
};

const habitUpdated = (habit) => {
    return {
        type: HABIT_UPDATED,
        payload: habit
    }
};

const habitUpdateError = (error) => {
    return {
        type: HABIT_UPDATE_ERROR,
        payload: error
    }
};

const habitRemoveSaga = (id) => {
    return {
        type: HABIT_REMOVE_SAGA,
        payload: id
    }
};

const habitRemoveLoading = () => {
    return {
        type: HABIT_REMOVE_LOADING,
    }
};

const habitRemoved = (id) => {
    return {
        type: HABIT_REMOVED,
        payload: id
    }
};

const habitRemoveError = (error) => {
    return {
        type: HABIT_REMOVE_ERROR,
        payload: error
    }
};

const habitCreateSaga = (newHabit) => {
    return {
        type: HABIT_CREATE_SAGA,
        payload: newHabit
    }
};

const habitCreateLoading = () => {
    return {
        type: HABIT_CREATE_LOADING,
    }
};

const habitCreated = (newHabit) => {
    return {
        type: HABIT_CREATED,
        payload: newHabit
    }
};

const habitCreateError = (error) => {
    return {
        type: HABIT_CREATE_ERROR,
        payload: error
    }
};


const categoriesRequestedSaga = () => {
    return {
        type: CATEGORIES_REQUESTED_SAGA
    }
};

const categoriesFetched = (categories) => {
    return {
        type: CATEGORIES_FETCHED,
        payload: categories
    }
};

const categoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING,
    }
};

const categoriesError = (error) => {
    return {
        type: CATEGORIES_ERROR,
        payload: error
    }
};

const categoryCreateSaga = (newCategory) => {
    return {
        type: CATEGORY_CREATE_SAGA,
        payload: newCategory
    }
};


const categoryCreated = (newCategory) => {
    return {
        type: CATEGORY_CREATED,
        payload: newCategory
    }
};

const showCategoryCreate = () => {
    return {
        type: SHOW_CATEGORY_CREATE,
    }
};

const hideCategoryCreate = () => {
    return {
        type: HIDE_CATEGORY_CREATE,
    }
};

const showHabitCreate = () => {
    return {
        type: SHOW_HABIT_CREATE,
    }
};

const hideHabitCreate = () => {
    return {
        type: HIDE_HABIT_CREATE,
    }
};

const onDoneSaga = (id) => {
    return {
        type: HABIT_DONE_SAGA,
        payload: id
    }
};

const habitDoneShowAlert = (id) => {
    return {
        type: HABIT_DONE_SHOW_ALERT,
        payload: id
    }
};

const habitDoneHideAlert = () => {
    return {
        type: HABIT_DONE_HIDE_ALERT,
    }
};

const statisticsLoading = () => {
    return {
        type: STATISTICS_LOADING,
    }
};

const statisticsLoaded = () => {
    return {
        type: STATISTICS_LOADED,
    }
};

export {
    loginSaga,
    loginSuccess,
    logoutSaga,
    logout,
    loginFail,
    registerInit,

    registerSaga,
    registerSuccess,
    registerFail,
    setMessage,
    clearMessage,


    habitsFetched,
    requestHabitsSaga,
    habitCreateSaga,
    habitEditShow,
    habitEditHide,
    habitRemoveSaga,
    habitRemoveLoading,
    habitRemoved,
    habitRemoveError,
    habitUpdateLoading,
    habitUpdateSaga,
    habitUpdateError,
    habitUpdated,
    showHabitCreate,
    hideHabitCreate,
    habitCreateLoading,
    habitCreated,
    habitCreateError,
    habitsLoading,
    habitsError,
    categoriesRequestedSaga,
    categoriesFetched,
    categoriesError,
    categoriesLoading,
    categoryCreateSaga,
    categoryCreated,
    showCategoryCreate,
    hideCategoryCreate,
    onDoneSaga,
    habitDoneShowAlert,
    habitDoneHideAlert,
    statisticsLoading,
    statisticsLoaded
};

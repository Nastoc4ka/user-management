import {
    CATEGORIES_ERROR,
    CATEGORIES_FETCHED,
    CATEGORIES_LOADING,
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    HABIT_CREATE_SAGA,
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
    STATISTICS_LOADED,
    STATISTICS_LOADING
} from "./types"

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
    habitsLoading,
    habitsError,
    categoriesRequestedSaga,
    categoriesFetched,
    categoriesError,
    categoriesLoading,
    categoryCreateSaga,
    onDoneSaga,
    habitDoneShowAlert,
    habitDoneHideAlert,
    statisticsLoading,
    statisticsLoaded
};

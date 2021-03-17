import {
    FETCH_HABITS,
    FETCH_HABITS_HIDE,
    FETCH_HABITS_SUCCESS,
    HIDE_ERROR,
    HIDE_INPUT,
    HIDE_LOADER,
    MAKE_EDIT_HABIT,
    REMOVE_HABIT,
    SHOW_ERROR,
    SHOW_INPUT,
    SHOW_LOADER,
} from "./types"

const showLoader = () => {
    return {
        type: SHOW_LOADER,
    }
};

const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
};

const showError = (error) => {
    return {
        type: SHOW_ERROR,
        payload: error
    }
};

const hideError = () => {
    return {
        type: HIDE_ERROR,
    }
};

const habitsLoaded = (habits) => {
    return {
        type: FETCH_HABITS_SUCCESS,
        payload: habits
    }
};

const habitsHide = () => {
    return {
        type: FETCH_HABITS_HIDE,
    }
};

const showInput = (id) => {
    return {
        type: SHOW_INPUT,
        payload: id
    }
};

const hideInput = () => {
    return {
        type: HIDE_INPUT,
    }
};

const removeHabit = (idx) => {
    return {
        type: REMOVE_HABIT,
        payload: idx
    }
};

const makeEditHabit = (newHabit) => {
    return {
        type: MAKE_EDIT_HABIT,
        payload: newHabit
    }
};

const fetchHabits = () => {
    return {
        type: FETCH_HABITS
    }
};

export {
    habitsHide,
    habitsLoaded,
    fetchHabits,
    makeEditHabit,
    showInput,
    hideInput,
    removeHabit,
    showLoader,
    hideLoader,
    showError,
    hideError
};
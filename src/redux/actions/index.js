import {
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_HIDE,
    FETCH_CATEGORIES_SUCCESS,
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
    SHOW_LOADER
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

const categoriesLoaded = (categories) => {
    console.log(categories);
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
};

const habitsHide = () => {
    return {
        type: FETCH_HABITS_HIDE,
    }
};

const categoriesHide = () => {
    return {
        type: FETCH_CATEGORIES_HIDE,
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

const removeHabit = (id) => {
    return {
        type: REMOVE_HABIT,
        payload: id
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

const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    }
};

export {
    categoriesHide,
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
    hideError,
    fetchCategories,
    categoriesLoaded,

};
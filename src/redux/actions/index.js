import {
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_HIDE,
    FETCH_CATEGORIES_SUCCESS,
    HABITS_ERROR,
    HABITS_FETCHED,
    HABITS_LOADING,
    HABITS_REQUESTED,
    HIDE_INPUT,
    MAKE_EDIT_HABIT,
    REMOVE_HABIT,
    SHOW_INPUT
} from "./types"

const requestHabits = () => {
    return {
        type: HABITS_REQUESTED
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

const categoriesLoaded = (categories) => {
    console.log(categories);
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
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

const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    }
};

export {
    habitsFetched,
    requestHabits,
    makeEditHabit,
    showInput,
    hideInput,
    removeHabit,
    habitsLoading,
    habitsError,
    fetchCategories,
    categoriesLoaded,

};
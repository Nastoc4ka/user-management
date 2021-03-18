import {
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_HIDE,
    FETCH_CATEGORIES_SUCCESS,
    HABIT_CREATE,
    HABIT_EDIT_HIDE,
    HABIT_EDIT_SHOW,
    HABIT_REMOVE,
    HABIT_UPDATE,
    HABITS_ERROR,
    HABITS_FETCHED,
    HABITS_LOADING,
    HABITS_REQUESTED
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

const habitRemove = (id) => {
    return {
        type: HABIT_REMOVE,
        payload: id
    }
};

const habitCreate = (newHabit) => {
    return {
        type: HABIT_CREATE,
        payload: newHabit
    }
};

const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    }
};
const habitUpdate = (habit) => {
    return {
        type: HABIT_UPDATE,
        payload: habit
    }
};

const categoriesHide = () => {
    return {
        type: FETCH_CATEGORIES_HIDE,
    }
};

export {
    habitsFetched,
    requestHabits,
    habitCreate,
    habitEditShow,
    habitEditHide,
    habitRemove,
    habitUpdate,
    habitsLoading,
    habitsError,
    fetchCategories,
    categoriesLoaded,

};

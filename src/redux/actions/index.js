import {
    CATEGORIES_ERROR,
    CATEGORIES_FETCHED,
    CATEGORIES_LOADING,
    CATEGORIES_REQUESTED,
    FETCH_CATEGORIES,
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
const habitUpdate = (habit) => {
    return {
        type: HABIT_UPDATE,
        payload: habit
    }
};
const categoriesRequested = () => {
    return {
        type: CATEGORIES_REQUESTED
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
    categoriesRequested,
    categoriesFetched,
    categoriesError,
    categoriesLoading,

};

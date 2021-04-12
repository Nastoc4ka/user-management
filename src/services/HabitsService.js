import {CategoryError, HabitError} from "../errors";
import {catchError, client} from './client';
import authHeader from "./authHeader";

const doneHabit = (id) => {
    return client.post(`/habits/done`, {id}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(HabitError));
};

const createHabit = (newHabit) => {
    return client.post(`/habits`, {...newHabit}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(HabitError));
};

const updateHabit = (habit) => {
    return client.put(`/habits`, {...habit}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(HabitError));
};

const removeHabit = (id) => {
    return client.delete(`/habits?id=${id}`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(HabitError));
};

const getHabits = () => {
    return client.get(`/habits`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(HabitError));
};

const getCategories = () => {
    return client.get(`/categories`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(CategoryError))
};

const createCategory = (newCategory) => {
    return client.post(`/categories`, {...newCategory}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(CategoryError))
};

export default {
    doneHabit,
    createHabit,
    updateHabit,
    removeHabit,
    getHabits,
    getCategories,
    createCategory,
};
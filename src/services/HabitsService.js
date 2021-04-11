import axios from 'axios';
import authHeader from "./authHeader";
import {CategoryError, HabitError} from "../errors";

const API_URL = "http://localhost:8080/api/";

export default class HabitsService {

    catchError = (errorType) => (err) => {
        if (err.response && err.response.data && err.response.data.msg) {
            throw new errorType(err.response.data.msg);
        }
        throw new errorType('Something went wrong... please contact vendor');
    };

    doneHabit(id) {
        return axios.post(`${API_URL}habits/done`, {id}, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response.data.msg) {
                    throw new HabitError(err.response.data.msg);
                }
                throw new HabitError('Something went wrong... please contact vendor');
            });
    }

    createHabit(newHabit) {
        return axios.post(`${API_URL}habits`, {...newHabit}, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response && err.response.data && err.response.data.msg) {
                    throw new HabitError(err.response.data.msg);
                }
                throw new HabitError('Something went wrong... please contact vendor');
            })
    }

    updateHabit(habit) {
        return axios.put(`${API_URL}habits`, {...habit}, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response && err.response.data && err.response.data.msg) {
                    throw new HabitError(err.response.data.msg);
                }
                throw new HabitError('Something went wrong... please contact vendor');
            })
    }

    removeHabit(id) {
        return axios.delete(`${API_URL}habits?id=${id}`, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response.data.msg) {
                    throw new HabitError(err.response.data.msg);
                }
                throw new HabitError('Something went wrong... please contact vendor');
            })
    }

    getHabits() {
        return axios.get(`${API_URL}habits`, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response && err.response.data && err.response.data.msg) {
                    throw new HabitError(err.response.data.msg);
                }
                throw new HabitError('Something went wrong... please contact vendor');
            })
    }

    getCategories() {
        return axios.get(`${API_URL}categories`, {headers: authHeader()})
            .then((response) => response.data)
            .catch(err => {
                if (err.response.data.msg) {
                    throw new CategoryError(err.response.data.msg);
                }
                throw new CategoryError('Something went wrong... please contact vendor');
            })
    }

    createCategory(newCategory) {
        return axios.post(`${API_URL}categories`, {...newCategory}, {headers: authHeader()})
            .then((response) => response.data)
            .catch(this.catchError(CategoryError))
    }
}
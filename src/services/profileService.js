import {CategoryError, ProfileError} from "../errors";
import {catchError, client} from './client';
import authHeader from "./authHeader";

const doneHabit = (id) => {
    return client.post(`/habits/done`, {id}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const createProfile = (newProfile) => {
    console.log(newProfile);
    return client.post(`/profiles`, {...newProfile}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const updateProfile = (profile) => {
    return client.put(`/profiles`, {...profile}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const removeProfile = (id) => {
    return client.delete(`/profiles?id=${id}`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const getProfiles = () => {
    return client.get(`/profiles`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
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
    createProfile,
    updateProfile,
    removeProfile,
    getProfiles,
    getCategories,
    createCategory,
};
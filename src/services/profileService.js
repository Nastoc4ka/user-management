import {ProfileError} from "../errors";
import {catchError, client} from './client';
import authHeader from "./authHeader";

const doneHabit = (id) => {
    return client.post(`/habits/done`, {id}, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const createProfile = (newProfile) => {
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

const getUsers = () => {
    return client.get(`/users`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

const getDashboard = () => {
    return client.get(`/dashboard`, {headers: authHeader()})
        .then(({data}) => data)
        .catch(catchError(ProfileError));
};

export default {
    createProfile,
    updateProfile,
    removeProfile,
    getProfiles,
    getUsers,
    getDashboard,
};
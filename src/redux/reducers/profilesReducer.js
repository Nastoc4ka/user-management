import {
    PROFILE_CREATE_ERROR,
    PROFILE_CREATE_LOADING,
    PROFILE_CREATED,
    PROFILE_REMOVE_ERROR,
    PROFILE_REMOVE_LOADING,
    PROFILE_REMOVED,
    PROFILE_UPDATE_ERROR,
    PROFILE_UPDATE_LOADING,
    PROFILE_UPDATED,
    PROFILES_ERROR,
    PROFILES_FETCHED,
    PROFILES_LOADING
} from "../actions/types";

const initialState = {

    loadingAllProfiles: true,
    profiles: [],
    error: null,

    loadingEditProfile: false,
    errorEditProfile: null,

    loadingRemoveProfile: false,
    errorRemoveProfile: null,

    loadingCreateProfile: false,
    errorCreateProfile: null,
};

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILES_LOADING:
            return {
                ...state,
                profiles: [],
                loadingAllProfiles: true,
                error: null
            };
        case PROFILES_FETCHED:
            return {
                ...state,
                profiles: action.payload,
                loadingAllProfiles: false,
                error: null
            };
        case PROFILES_ERROR:
            return {
                ...state,
                profiles: [],
                loadingAllProfiles: false,
                error: action.payload
            };
        case PROFILE_UPDATE_LOADING:
            return {
                ...state,
                loadingEditProfile: true,
                errorEditProfile: null
            };
        case PROFILE_UPDATED:
            const profile = action.payload;
            const idx = state.profiles.findIndex((prof) => prof.id === profile.id);
            return {
                ...state,
                profiles: [...state.profiles.slice(0, idx), profile, ...state.profiles.slice(idx + 1)],
                loadingEditProfile: false,
                errorEditProfile: null,
            };
        case PROFILE_UPDATE_ERROR:
            return {
                ...state,
                loadingEditProfile: false,
                errorEditProfile: action.payload,
            };
        case PROFILE_CREATE_LOADING:
            return {
                ...state,
                loadingCreateProfile: true,
                errorCreateProfile: null,
            };
        case PROFILE_CREATED:
            return {
                ...state,
                profiles: [...state.profiles, action.payload],
                loadingEditProfile: false,
                loadingCreateProfile: false,
                errorEditProfile: null,
            };
        case PROFILE_CREATE_ERROR:
            return {
                ...state,
                loadingCreateProfile: false,
                errorCreateProfile: action.payload,
            };
        case PROFILE_REMOVE_LOADING:
            return {
                ...state,
                loadingRemoveProfile: true,
                errorRemoveProfile: null
            };
        case PROFILE_REMOVED:
            const idProfile = action.payload;
            const updatedProfileList = state.profiles.filter((profile) => profile.id !== idProfile);
            return {
                ...state,
                profiles: updatedProfileList,
                loadingRemoveProfile: false,
                errorRemoveProfile: null,
            };
        case PROFILE_REMOVE_ERROR:
            return {
                ...state,
                loadingRemoveProfile: false,
                errorRemoveProfile: action.payload,
            };

        default:
            return state
    }
};

export default profilesReducer
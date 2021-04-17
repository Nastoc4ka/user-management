import {call, put, takeEvery} from 'redux-saga/effects';
import {
    hideProfileCreation,
    loginFail,
    loginLoading,
    loginSuccess,
    logout,
    profileCreated,
    profileCreateError,
    profileCreateLoading,
    profileEditHide,
    profileRemoved,
    profileRemoveError,
    profileRemoveLoading,
    profilesError,
    ProfilesFetched,
    profilesLoading,
    profileUpdated,
    profileUpdateError,
    profileUpdateLoading,
    registerFail,
    registerLoading,
    registerSuccess,
    setMessage,
} from '../redux/actions';
import {authService, profileService} from '../services';

import {
    LOGIN_SAGA,
    LOGOUT_SAGA,
    PROFILE_CREATE_SAGA,
    PROFILE_REMOVE_SAGA,
    PROFILE_UPDATE_SAGA,
    PROFILES_REQUESTED_SAGA,
    REGISTER_SAGA
} from "../redux/actions/types";
import UnauthorizedError from "../errors/UnauthorizedError";


export function* sagaWatcher() {
    yield takeEvery(PROFILES_REQUESTED_SAGA, fetchProfilesSaga);
    yield takeEvery(PROFILE_REMOVE_SAGA, removeProfileSaga);
    yield takeEvery(PROFILE_CREATE_SAGA, createProfileSaga);
    yield takeEvery(PROFILE_UPDATE_SAGA, updateProfileSaga);
    yield takeEvery(LOGIN_SAGA, loginSaga);
    yield takeEvery(REGISTER_SAGA, registerSaga);
    yield takeEvery(LOGOUT_SAGA, logoutSaga);

}

function* loginSaga(action) {
    try {
        yield put(loginLoading());
        const payload = yield call(() => authService.login(action.payload));
        yield delay(500);
        yield put(loginSuccess(payload))
    } catch (error) {
        yield put(loginFail());
        yield put(setMessage(error.msg));
    }
}

function* logoutSaga() {
    try {
        yield put(loginLoading());
        yield call(() => authService.logout());
        yield delay(500);
        yield put(logout())
    } catch (error) {
        //yield put(logoutFail());
        yield put(setMessage(error.msg));
    }
}

function* registerSaga(action) {
    try {
        yield put(registerLoading());
        const payload = yield call(() => authService.register(action.payload));
        yield put(registerSuccess(payload));
    } catch (error) {
        yield put(registerFail());
        yield put(setMessage(error.msg));
    }
}

function* fetchProfilesSaga() {
    try {
        yield put(profilesLoading());
        const payload = yield call(profileService.getProfiles);
        yield put(ProfilesFetched(payload));
    } catch (error) {
        yield handleAuthError(error);
        yield put(profilesError(error));
    }
}

function* removeProfileSaga(action) {
    try {
        yield put(profileRemoveLoading());
        yield call(() => profileService.removeProfile(action.payload));
        yield put(profileRemoved(action.payload))
    } catch (error) {
        yield handleAuthError(error);
        yield put(profileRemoveError(error));
    }
}

function* createProfileSaga(action) {
    try {
        yield put(profileCreateLoading());
        yield call(() => profileService.createProfile(action.payload));
        yield put(profileCreated(action.payload));
        yield put(hideProfileCreation());
    } catch (error) {
        yield handleAuthError(error);
        yield put(profileCreateError(error))
    }
}

function* updateProfileSaga(action) {
    try {
        yield put(profileUpdateLoading());
        yield call(() => profileService.updateProfile(action.payload));
        yield put(profileEditHide());
        yield put(profileUpdated(action.payload))
    } catch (error) {
        yield handleAuthError(error);
        yield put(profileUpdateError(error));
    }
}

const handleAuthError = (error) => {
    if (error instanceof UnauthorizedError) {
        error.message = 'not authorized';
        return window.location.reload();
    }
    return null
};

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

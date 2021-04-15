import {call, put, takeEvery} from 'redux-saga/effects';
import {
    categoriesError,
    categoriesFetched,
    categoriesLoading,
    categoryCreated,
    habitCreated,
    habitCreateError,
    habitCreateLoading,
    habitDoneHideAlert,
    habitDoneShowAlert,
    habitEditHide,
    habitRemoved,
    habitRemoveError,
    habitRemoveLoading,
    habitsError,
    habitsFetched,
    habitsLoading,
    habitUpdated,
    habitUpdateError,
    habitUpdateLoading,
    hideCategoryCreate,
    hideHabitCreate,
    loginFail,
    loginLoading,
    loginSuccess,
    logout,
    registerFail,
    registerLoading,
    registerSuccess,
    setMessage,
    statisticsLoaded,
} from '../redux/actions';
import {authService, habitsService} from '../services';

import {
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    HABIT_CREATE_SAGA,
    HABIT_DONE_SAGA,
    HABIT_REMOVE_SAGA,
    HABIT_UPDATE_SAGA,
    HABITS_REQUESTED_SAGA,
    LOGIN_SAGA,
    LOGOUT_SAGA,
    REGISTER_SAGA
} from "../redux/actions/types";
import UnauthorizedError from "../errors/UnauthorizedError";


export function* sagaWatcher() {
    yield takeEvery(HABITS_REQUESTED_SAGA, fetchHabitsSaga);
    yield takeEvery(HABIT_REMOVE_SAGA, removeHabitSaga);
    yield takeEvery(HABIT_CREATE_SAGA, createHabitSaga);
    yield takeEvery(HABIT_UPDATE_SAGA, updateHabitSaga);
    yield takeEvery(CATEGORIES_REQUESTED_SAGA, fetchCategoriesSaga);
    yield takeEvery(CATEGORY_CREATE_SAGA, createCategorySaga);
    yield takeEvery(HABIT_DONE_SAGA, doneHabitSaga);
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
        yield put(registerSuccess(payload))
    } catch (error) {
        yield put(registerFail());
        yield put(setMessage(error.msg));
    }
}

function* doneHabitSaga(action) {
    try {
        yield put(habitUpdateLoading());
        const payload = yield call(() => habitsService.doneHabit(action.payload));
        yield put(habitUpdated(payload));
        yield put(habitDoneShowAlert(action.payload));
        yield delay(1200);
        yield put(habitDoneHideAlert());
    } catch (error) {
        yield handleAuthError(error);
        yield put(habitsError(error));
    }
}

function* fetchHabitsSaga() {
    try {
        yield put(habitsLoading());
        const payload = yield call(habitsService.getHabits);
        yield put(habitsFetched(payload));
        yield put(statisticsLoaded());
    } catch (error) {
        yield handleAuthError(error);
        yield put(habitsError(error));
    }
}

function* removeHabitSaga(action) {
    try {
        yield put(habitRemoveLoading());
        yield call(() => habitsService.removeHabit(action.payload));
        yield put(habitRemoved(action.payload))
    } catch (error) {
        yield handleAuthError(error);
        yield put(habitRemoveError(error));
    }
}

function* createHabitSaga(action) {
    try {
        yield put(habitCreateLoading());
        const payload = yield call(() => habitsService.createHabit(action.payload));
        yield put(habitCreated(payload));
        yield put(hideHabitCreate(payload));
    } catch (error) {
        yield handleAuthError(error);
        yield put(habitCreateError(error))
    }
}

function* updateHabitSaga(action) {
    try {
        yield put(habitUpdateLoading());
        const payload = yield call(() => habitsService.updateHabit(action.payload));
        yield put(habitEditHide());
        yield put(habitUpdated(payload))
    } catch (error) {
        yield handleAuthError(error);
        yield put(habitUpdateError(error));
    }
}

function* fetchCategoriesSaga() {
    try {
        yield put(categoriesLoading());
        const payload = yield call(habitsService.getCategories);
        yield put(categoriesFetched(payload));
    } catch (error) {
        yield handleAuthError(error);
        yield put(categoriesError(error));
    }
}

function* createCategorySaga(action) {
    try {
        yield put(categoriesLoading());
        const payload = yield call(() => habitsService.createCategory(action.payload));
        yield put(categoryCreated(payload));
        yield put(hideCategoryCreate(payload));
    } catch (error) {
        yield handleAuthError(error);
        yield put(categoriesError(error));
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

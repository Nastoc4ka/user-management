import {call, put, takeEvery} from 'redux-saga/effects';
import {
    categoriesError,
    categoriesFetched,
    categoriesLoading,
    categoryCreated,
    habitCreated,
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
    loginFail,
    loginSuccess,
    setMessage,
    statisticsLoaded
} from '../redux/actions';
import HabitsService from '../services/HabitsService';
import AuthService from '../services/authService';

import {
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    HABIT_CREATE_SAGA,
    HABIT_DONE_SAGA,
    HABIT_REMOVE_SAGA,
    HABIT_UPDATE_SAGA,
    HABITS_REQUESTED_SAGA,
    LOGIN_SAGA
} from "../redux/actions/types";
import UnauthorizedError from "../errors/UnauthorizedError";

const habitsService = new HabitsService();


export function* sagaWatcher() {
    yield takeEvery(HABITS_REQUESTED_SAGA, fetchHabitsSaga);
    yield takeEvery(HABIT_REMOVE_SAGA, removeHabitSaga);
    yield takeEvery(HABIT_CREATE_SAGA, createHabitSaga);
    yield takeEvery(HABIT_UPDATE_SAGA, updateHabitSaga);
    yield takeEvery(CATEGORIES_REQUESTED_SAGA, fetchCategoriesSaga);
    yield takeEvery(CATEGORY_CREATE_SAGA, createCategorySaga);
    yield takeEvery(HABIT_DONE_SAGA, doneHabitSaga);
    yield takeEvery(LOGIN_SAGA, loginSaga);


}

function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms))
}

function* loginSaga(action) {
    try {
//make loading
        const payload = yield call(() => AuthService.login(action.payload));
        yield put(loginSuccess(payload))
    } catch (error) {
        yield put(loginFail());
        yield put(setMessage(error.msg));
        yield handleAuthError(error)
    }
}

function* doneHabitSaga(action) {
    try {
        yield put(habitUpdateLoading());
        const payload = yield call(() => habitsService.doneHabit(action.payload));
        yield put(habitUpdated(payload));
        yield put(habitDoneShowAlert(action.payload));
        yield delay(1000);
        yield put(habitDoneHideAlert());
    } catch (error) {
        yield put(habitsError(error));
        yield handleAuthError(error)
    }
}

function* fetchHabitsSaga() {
    try {
        yield put(habitsLoading());
        const payload = yield call(habitsService.getHabits);
        yield put(habitsFetched(payload));
        yield put(statisticsLoaded());
    } catch (error) {
        yield put(habitsError(error));
        yield handleAuthError(error)
    }
}

function* removeHabitSaga(action) {
    try {
        yield put(habitRemoveLoading());
        yield call(() => habitsService.removeHabit(action.payload));
        yield put(habitRemoved(action.payload))
    } catch (error) {

        yield put(habitRemoveError(error))
        yield handleAuthError(error)
    }
}

function* createHabitSaga(action) {
    try {
        const payload = yield call(() => habitsService.createHabit(action.payload));
        yield put(habitCreated(payload))
    } catch (error) {
        // yield handleAuthError(error);
        yield put(habitsError(error))
    }
}

function* updateHabitSaga(action) {
    try {
        yield put(habitUpdateLoading());
        const payload = yield call(() => habitsService.updateHabit(action.payload));
        yield put(habitEditHide());
        yield put(habitUpdated(payload))
    } catch (error) {
        yield put(habitUpdateError(error))
        yield handleAuthError(error)
    }
}

function* fetchCategoriesSaga() {
    try {
        yield put(categoriesLoading());
        const payload = yield call(habitsService.getCategories);
        yield put(categoriesFetched(payload));
    } catch (error) {
        yield put(categoriesError(error));
        yield handleAuthError(error)
    }
}

function* createCategorySaga(action) {
    try {
        const payload = yield call(() => habitsService.createCategory(action.payload));
        yield put(categoryCreated(payload))
    } catch (error) {
        yield put(categoriesError(error));
        yield handleAuthError(error)
    }
}

const handleAuthError = (error) => {
    if (error instanceof UnauthorizedError) {
        return window.location.reload();
    }
    return null
};

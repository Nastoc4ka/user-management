import {call, put, takeEvery} from 'redux-saga/effects';
import {
    categoriesError,
    categoriesFetched,
    categoriesLoading,
    habitEditHide,
    habitRemoved,
    habitRemoveError,
    habitRemoveLoading,
    habitsError,
    habitsFetched,
    habitsLoading,
    habitUpdated,
    habitUpdateError,
    habitUpdateLoading
} from '../redux/actions';
import HabitsService from '../services/HabitsService';
import {
    CATEGORIES_REQUESTED_SAGA,
    CATEGORY_CREATE_SAGA,
    HABIT_CREATE_SAGA,
    HABIT_DONE_SAGA,
    HABIT_REMOVE_SAGA,
    HABIT_UPDATE_SAGA,
    HABITS_REQUESTED_SAGA
} from "../redux/actions/types";

const habitsService = new HabitsService();


export function* sagaWatcher() {
    yield takeEvery(HABITS_REQUESTED_SAGA, fetchHabitsSaga);
    yield takeEvery(HABIT_REMOVE_SAGA, removeHabitSaga);
    yield takeEvery(HABIT_CREATE_SAGA, createHabitSaga);
    yield takeEvery(HABIT_UPDATE_SAGA, updateHabitSaga);
    yield takeEvery(CATEGORIES_REQUESTED_SAGA, fetchCategoriesSaga);
    yield takeEvery(CATEGORY_CREATE_SAGA, createCategorySaga);
    yield takeEvery(HABIT_DONE_SAGA, doneHabitSaga);


}

function* doneHabitSaga(action) {
    try {
        yield put(habitUpdateLoading());
        const payload = yield call(() => habitsService.doneHabit(action.payload));
        console.log(payload);
        yield put(habitUpdated(payload))
    } catch (error) {
        yield put(habitsError(error))
    }
}

function* fetchHabitsSaga() {
    try {
        yield put(habitsLoading());
        const payload = yield call(habitsService.getHabits);
        yield put(habitsFetched(payload));
    } catch (error) {
        yield put(habitsError(error))
    }
}

function* removeHabitSaga(action) {
    try {
        yield put(habitRemoveLoading());
        const payload = yield call(() => habitsService.removeHabit(action.payload));
        yield put(habitRemoved(payload))
    } catch (error) {
        yield put(habitRemoveError(error))
    }
}

function* createHabitSaga(action) {
    try {
        yield put(habitsLoading());
        const payload = yield call(() => habitsService.createHabit(action.payload));
        yield put(habitsFetched(payload))
    } catch (error) {
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
    }
}

function* fetchCategoriesSaga() {
    try {
        yield put(categoriesLoading());
        const payload = yield call(habitsService.getCategories);
        yield put(categoriesFetched(payload));
    } catch (error) {
        yield put(categoriesError(error))
    }
}

function* createCategorySaga(action) {
    try {
        yield put(categoriesLoading());
        const payload = yield call(() => habitsService.createCategory(action.payload));
        yield put(categoriesFetched(payload))
    } catch (error) {
        yield put(categoriesError(error))
    }
}

import {call, put, takeEvery} from 'redux-saga/effects';
import {categoriesLoaded, habitsError, habitsFetched, habitsLoading, hideInput} from '../redux/actions';
import HabitsService from '../services/HabitsService';
import {FETCH_CATEGORIES, HABITS_REQUESTED, MAKE_EDIT_HABIT, REMOVE_HABIT} from "../redux/actions/types";

const habitsService = new HabitsService();


export function* sagaWatcher() {
    yield takeEvery(HABITS_REQUESTED, fetchHabitsSaga);
    yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
    yield takeEvery(REMOVE_HABIT, removeHabitSaga);
    yield takeEvery(MAKE_EDIT_HABIT, makeEditHabit);
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

function* fetchCategoriesSaga() {
    try {
        const payload = yield call(habitsService.getCategories);
        yield put(categoriesLoaded(payload));
    } catch (error) {
        yield put(habitsError(error))
    }
}

function* removeHabitSaga(action) {
    try {
        yield put(habitsLoading());
        const payload = yield call(() => habitsService.removeHabit(action.payload));
        yield put(habitsFetched(payload))
    } catch (error) {
        yield put(habitsError(error))
    }
}

function* makeEditHabit(action) {
    try {
        yield put(habitsLoading());
        const payload = yield call(() => habitsService.makeEditHabit(action.payload));
        yield put(hideInput());
        yield put(habitsFetched(payload))
    } catch (error) {
        yield put(habitsError(error))
    }
}

// function* makeEditHabit(action) {
//     try {
//         yield put(requestHabits());
//         const payload = yield call(() => habitsService.makeEditHabit(action.payload));
//         yield put(habitsFetched(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }

// function* removeHabitSaga(action) {
//     try {
//         yield put(requestHabits());
//         const payload = yield call(() => habitsService.removeHabit(action.payload));
//         yield put(habitsFetched(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }

// function* fetchHabitsSaga() {
//     try {
//         yield put(requestHabits());
//         const payload = yield call(habitsService.getHabits);
//         yield put(habitsFetched(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }
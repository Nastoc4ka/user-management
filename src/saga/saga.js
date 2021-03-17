import {call, put, takeEvery} from 'redux-saga/effects';
import {
    habitsError,
    habitsLoaded,
    habitsRequested,
    hideInput,
    hideLoader,
    showError,
    showLoader
} from '../redux/actions';
import HabitsService from '../services/HabitsService';
import {FETCH_HABITS, MAKE_EDIT_HABIT, REMOVE_HABIT} from "../redux/actions/types";

const habitsService = new HabitsService();


export function* sagaWatcher() {
    yield takeEvery(FETCH_HABITS, fetchHabitsSaga);
    yield takeEvery(REMOVE_HABIT, removeHabitSaga);
    yield takeEvery(MAKE_EDIT_HABIT, makeEditHabit);
}

// function* fetchHabitsSaga() {
//     try {
//         yield put(habitsRequested());
//         const payload = yield call(habitsService.getHabits);
//         yield put(habitsLoaded(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }

function* fetchHabitsSaga() {
    try {
        yield put(showLoader());
        const payload = yield call(habitsService.getHabits);
        yield put(habitsLoaded(payload));
        yield put(hideLoader());

    } catch (error) {
        yield put(hideLoader());
        yield put(showError(error))
    }
}

function* removeHabitSaga(action) {
    try {
        yield put(showLoader());
        const payload = yield call(() => habitsService.removeHabit(action.payload));
        yield put(hideLoader());
        yield put(habitsLoaded(payload))
    } catch (error) {
        yield put(hideLoader());
        yield put(showError(error))
    }
}

// function* removeHabitSaga(action) {
//     try {
//         yield put(habitsRequested());
//         const payload = yield call(() => habitsService.removeHabit(action.payload));
//         yield put(habitsLoaded(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }
function* makeEditHabit(action) {
    try {
        yield put(showLoader());
        const payload = yield call(() => habitsService.makeEditHabit(action.payload));
        yield put(hideInput());
        yield put(hideLoader());
        yield put(habitsLoaded(payload))
    } catch (error) {
        yield put(hideLoader());
        yield put(showError(error))
    }
}

// function* makeEditHabit(action) {
//     try {
//         yield put(habitsRequested());
//         const payload = yield call(() => habitsService.makeEditHabit(action.payload));
//         yield put(habitsLoaded(payload))
//     } catch (error) {
//         yield put(habitsError(error))
//     }
// }


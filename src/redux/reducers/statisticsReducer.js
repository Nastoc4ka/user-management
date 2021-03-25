import {STATISTICS_LOADED, STATISTICS_LOADING} from "../actions/types";

const initialState = {
    loadingStatistics: true
};

const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATISTICS_LOADING:
            return {
                loadingStatistics: true
            };
        case STATISTICS_LOADED:
            return {
                loadingStatistics: false
            };
        default:
            return state
    }
};

export default statisticsReducer
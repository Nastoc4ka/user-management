import {DASHBOARD_ERROR, DASHBOARD_FETCHED, DASHBOARD_LOADING} from "../actions/types";

const initialState = {
    loading: true,
    dashboardData: {},
    error: null,
};

const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case DASHBOARD_LOADING:
            return {
                dashboardData: {},
                loading: true,
                error: null
            };
        case DASHBOARD_FETCHED:
            return {
                dashboardData: action.payload,
                loading: false,
                error: null
            };
        case DASHBOARD_ERROR:
            return {
                dashboardData: {},
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default dashboardReducer
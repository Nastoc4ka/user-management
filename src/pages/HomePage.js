import React from 'react';
import {connect} from "react-redux";
import Spinner from "../components/spinner";
import {Redirect} from "react-router-dom";


const HomePage = ({isLoggedIn, loading}) => {

    if (!isLoggedIn) {
        return <Redirect to="/login"/>
    }

    if (loading) {
        return <Spinner/>
    }

    return <Redirect to="/profiles"/>


};

function mapStateToProps({authLoginReducer}) {
    const {user, isLoggedIn, loading} = authLoginReducer;
    return {
        user,
        isLoggedIn,
        loading
    };
}

export default connect(mapStateToProps)(HomePage)
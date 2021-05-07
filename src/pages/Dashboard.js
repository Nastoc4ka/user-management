import React, {useEffect} from 'react';
import './dashboard.css';
import {ListGroup} from "react-bootstrap";
import {requestDashboardSaga} from "../redux/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator/ErrorIndicator";


const Dashboard = ({dashboardData, requestDashboard, isLoggedIn, loading, error, user}) => {

    useEffect(() => {
        requestDashboard();
    }, []);

    if (!user.isAdmin) {
        return <Redirect to="/"/>
    }

    if (!isLoggedIn) {
        return <Redirect to="/login"/>
    }
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator error={error}/>
    }

    return (
        <div className='pageWrap'>
            <h5>Dashboard:</h5>

            {dashboardData.users && <ListGroup className='listWrap'>
                <ListGroup.Item className='list-group-flush dashboardItem pt-0 pr-0'>
                    <p>Users:</p>
                    <p className='quantity'>{dashboardData.users}</p>
                </ListGroup.Item>
                <ListGroup.Item className='list-group-flush dashboardItem pt-0 pr-0'>
                    <p>Profiles:</p>
                    <p className='quantity'>{dashboardData.profiles}</p>
                </ListGroup.Item>
                <ListGroup.Item className='list-group-flush dashboardItem pt-0 pr-0'>
                    <p>Profiles over 18 years old:</p>
                    <p className='quantity'>{dashboardData.profilesAdult}</p>
                </ListGroup.Item>
            </ListGroup>}
        </div>)
};

function mapStateToProps({
                             authLoginReducer: {user, isLoggedIn},
                             dashboardReducer: {dashboardData, error, loading}
                         }) {
    return {
        user, isLoggedIn, dashboardData, error, loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestDashboard: () => dispatch(requestDashboardSaga()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
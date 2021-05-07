import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './users.css';
import {Redirect} from "react-router-dom";
import {requestUsersSaga} from "../redux/actions";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator/ErrorIndicator";
import UserView from "../components/user-view/UserView";

const Users = ({user, isLoggedIn, users, error, loading, requestUsers}) => {

    useEffect(() => {
        requestUsers();
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
            <h5>Users:</h5>

            <div className='listWrap'>
                {users.length > 0 && users.map(user => {
                    return <UserView
                        user={user}
                        key={user.id}
                    />
                })}
            </div>
        </div>
    )
};

function mapStateToProps({
                             authLoginReducer: {user, isLoggedIn},
                             usersReducer: {users, error, loading}
                         }) {
    return {
        user, isLoggedIn, users, error, loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestUsers: () => dispatch(requestUsersSaga()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
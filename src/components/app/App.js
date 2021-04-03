import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import {categoriesRequestedSaga, logoutSaga, requestHabitsSaga, statisticsLoaded} from "../../redux/actions";
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {HomePage, Statistics} from '../../pages';
import Header from "../header";
import Footer from "../footer";
import Login from "../login";
import Register from "../register";
import Profile from "../profile";

import {Col, Container, Row} from 'react-bootstrap';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import './app.css';
import HabitWelcome from "../habit-welcome";


const App = (props) => {

    useEffect(() => {
        if (props.user) {
            const {requestHabits, statisticsLoaded, fetchCategories} = props;
            requestHabits();
            fetchCategories();
            statisticsLoaded();
        }
    }, []);

    return (
        <Container role='main'>
            <Row>
                <Col>
                    <Header isLoggedIn={props.isLoggedIn}
                            user={props.user}
                            logout={props.logout}
                    />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/statistics' component={Statistics}/>
                        <Route path='/welcome' component={HabitWelcome}/>

                    </Switch>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestHabits: () => dispatch(requestHabitsSaga()),
        fetchCategories: () => dispatch(categoriesRequestedSaga()),
        statisticsLoaded: () => dispatch(statisticsLoaded()),
        logout: () => dispatch(logoutSaga())
    }
};

function mapStateToProps({authLoginReducer: {user, isLoggedIn}}) {
    return {user, isLoggedIn};
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

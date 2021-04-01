import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import {categoriesRequestedSaga, requestHabitsSaga, statisticsLoaded} from "../../redux/actions";
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

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        if (props.user) {
            const {requestHabits, statisticsLoaded, fetchCategories} = props;
            requestHabits();
            fetchCategories();
            statisticsLoaded();
        }
    }, []);

    // if (!props.user) {
    //     return <Redirect to="/loginSaga" />;
    // }
    // props.history.listen((location) => {
    //     props.dispatch(clearMessage()); // clear message when changing location
    // });

    return (
        <Container role='main'>
            <Row>
                <Col>
                    <Header />
                    <Switch>
                        <Route exact path='/' component ={HomePage}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/statistics' component={Statistics}/>
                        <Route path='/welcome' component={HabitWelcome}/>

                    </Switch>
                    <Footer />
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

    }
};

function mapStateToProps(state) {
    const {user} = state.authReducer;
    return {
        user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

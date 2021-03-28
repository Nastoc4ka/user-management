import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import {requestHabitsSaga, statisticsLoaded} from "../../redux/actions";
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {HomePage, LoginPage, Statistics} from '../../pages';
import Header from "../header";
import Footer from "../footer";
import {Col, Container, Row} from 'react-bootstrap';
import '../../fonts/New_Tegomin/NewTegomin-Regular.ttf';
import './app.css';


const App = (props) => {

    useEffect(() => {
        props.requestHabits();
        props.statisticsLoaded();
    }, []);

    return (
        <Container role='main'>
            <Row>
                <Col>
                    <Header />
                    <Switch>
                        <Route exact path='/' component ={HomePage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/statistics' component={Statistics}/>
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
        statisticsLoaded: () => dispatch(statisticsLoaded()),

    }
};

export default connect(null, mapDispatchToProps)(App)

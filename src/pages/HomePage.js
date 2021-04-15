import React from 'react';
import {connect} from "react-redux";
import HabitList from "../components/habit-list/index";
import {Col, Container, Row} from "react-bootstrap";
import {AddHabit} from "../components/habit-create";
import {AddCategory} from "../components/category-create";
import HabitWeek from "../components/habit-week";
import WelcomePage from "./WelcomePage";
import Spinner from "../components/spinner/spinner";


const HomePage = ({isLoggedIn, loading}) => {

    if (!isLoggedIn) {
        return <WelcomePage/>
    }

    if (loading) {
        return <Spinner/>
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={5} sm={12}>
                    <HabitList />
                    <AddHabit/>
                    <AddCategory/>
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>
                <Col lg={5} md={7} sm={12} className='mt-2 pl-0'>
                    <HabitWeek/>
                </Col>
            </Row>
        </Container>)
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
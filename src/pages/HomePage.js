import React from 'react';
import HabitList from "../components/habit-list/index";
import {Col, Container, Row} from "react-bootstrap";
import {AddHabit} from "../components/habit-create/AddHabit";
import {AddCategory} from "../components/category-create";
import CurrentWeekMarkedHabit from "../components/current-week-marked-habit";
import {ByDaysInRow, ByDone} from "../components/habit-statistics";

const HomePage = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} sm={12}>
                    <ByDone character={'Total done TOP'} md={3}/>
                </Col>
                <Col md={4} sm={12}>
                    <ByDaysInRow character={'MAX days in row'} md={3}/>
                </Col>

            </Row>
            <Row>
                <Col md={5} sm={12}>
                    <HabitList />
                    <AddHabit/>
                    <AddCategory/>
                </Col>
                <Col md={7} sm={12} className='mt-2 pl-0'>
                    <CurrentWeekMarkedHabit/>
                </Col>
            </Row>
        </Container>)
};

export default HomePage
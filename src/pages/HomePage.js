import React from 'react';
import HabitList from "../components/habit-list/index";
import {Col, Container, Row} from "react-bootstrap";
import {AddHabit} from "../components/habit-create/AddHabit";

const HomePage = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col sm={7}>

                    <AddHabit/>
                    <HabitList />
                </Col>
                <Col sm={5} className='mt-2'>
                    Week days
                </Col>
            </Row>
        </Container>)
};

export default HomePage